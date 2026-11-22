import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, MapPin, X } from 'lucide-react'
import { bhNeighborhoods, METRO_REGION, neighborhoodOptions } from '../config/neighborhoods'

/** Remove acentos e caixa para a busca: "sao" encontra "São". */
const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()

const MAX_RESULTS = 60

type Props = {
  id: string
  value: string
  onChange: (v: string) => void
  labelId: string
}

/**
 * Campo de busca com lista restrita: o cliente digita, filtra e escolhe
 * um bairro de BH ou "Região metropolitana". Texto livre não é aceito.
 */
export default function NeighborhoodSelect({ id, value, onChange, labelId }: Props) {
  const listId = useId()
  const [query, setQuery] = useState(value)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  // Mantém o texto em sincronia se o valor mudar por fora.
  useEffect(() => setQuery(value), [value])

  const results = useMemo(() => {
    const q = norm(query)
    // Com um valor já escolhido e o texto intacto, mostra a lista inteira.
    if (!q || query === value) return neighborhoodOptions.slice(0, MAX_RESULTS)
    const starts: string[] = []
    const contains: string[] = []
    for (const n of bhNeighborhoods) {
      const k = norm(n)
      if (k.startsWith(q)) starts.push(n)
      else if (k.includes(q)) contains.push(n)
    }
    // "Região metropolitana" fica sempre disponível no topo.
    return [METRO_REGION, ...starts, ...contains].slice(0, MAX_RESULTS)
  }, [query, value])

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [active])

  const choose = (v: string) => {
    onChange(v)
    setQuery(v)
    setOpen(false)
  }

  // Ao sair do campo: aceita se o texto bate exatamente com uma opção; senão, volta ao valor anterior.
  const onBlur = () => {
    const exact = neighborhoodOptions.find((n) => norm(n) === norm(query))
    if (exact) choose(exact)
    else {
      setQuery(value)
      setOpen(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) setOpen(true)
      else setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      if (open && results[active]) {
        e.preventDefault()
        choose(results[active])
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setQuery(value)
    }
  }

  const hasMore = results.length === MAX_RESULTS

  return (
    <div className="relative">
      <MapPin className="pointer-events-none absolute top-3.5 left-3.5 size-4 text-teal" aria-hidden="true" />
      <input
        id={id}
        type="text"
        role="combobox"
        aria-labelledby={labelId}
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && results[active] ? `${listId}-${active}` : undefined}
        autoComplete="off"
        value={query}
        placeholder="Digite seu bairro…"
        onChange={(e) => {
          setQuery(e.target.value)
          setActive(0)
          setOpen(true)
        }}
        onFocus={(e) => {
          e.target.select()
          setOpen(true)
        }}
        onClick={() => setOpen(true)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`w-full rounded-xl border bg-white py-3 pr-10 pl-10 text-base text-navy placeholder:text-ink/50 focus:border-teal focus:outline-none focus-visible:outline-3 focus-visible:outline-teal sm:text-sm ${
          value ? 'border-teal bg-teal-soft font-semibold' : 'border-mist'
        }`}
      />
      {value ? (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            onChange('')
            setQuery('')
            setOpen(true)
            document.getElementById(id)?.focus()
          }}
          className="absolute top-2 right-2 grid size-8 place-items-center rounded-full text-ink/60 hover:bg-white hover:text-navy"
          aria-label="Limpar bairro"
        >
          <X className="size-4" />
        </button>
      ) : (
        <ChevronDown className="pointer-events-none absolute top-3.5 right-3.5 size-4 text-ink/50" aria-hidden="true" />
      )}

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={labelId}
          className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-xl border border-mist bg-white py-1 text-sm shadow-card"
        >
          {results.length === 1 && (
            <li className="px-4 py-2 text-xs text-ink/70" role="presentation">
              Nenhum bairro de BH encontrado. Se for em outra cidade, escolha “Região metropolitana”.
            </li>
          )}
          {results.map((n, i) => {
            const selected = n === value
            const metro = n === METRO_REGION
            return (
              <li
                key={n}
                id={`${listId}-${i}`}
                data-index={i}
                role="option"
                aria-selected={selected}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(n)}
                onMouseMove={() => setActive(i)}
                className={`flex cursor-pointer items-center justify-between gap-2 px-4 py-2 ${
                  i === active ? 'bg-teal-soft' : ''
                } ${metro ? 'border-b border-mist font-semibold text-teal-dark' : 'text-navy'}`}
              >
                <span>
                  {n}
                  {metro && <span className="block text-[11px] font-normal text-ink/70">Cidades vizinhas a BH</span>}
                </span>
                {selected && <Check className="size-4 shrink-0 text-teal" aria-hidden="true" />}
              </li>
            )
          })}
          {hasMore && (
            <li className="px-4 py-2 text-[11px] text-ink/60" role="presentation">
              Continue digitando para ver mais bairros…
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
