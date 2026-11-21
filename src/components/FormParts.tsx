import type { ReactNode } from 'react'

export function StepHeader({ n, title }: { n: number; title: string }) {
  return (
    <legend className="mb-3 flex items-center gap-2.5 text-sm font-bold text-navy sm:text-base">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal text-sm text-white">{n}</span>
      {title}
    </legend>
  )
}

type Option<T extends string> = { value: T; label: ReactNode }

type RadioGroupProps<T extends string> = {
  name: string
  options: Option<T>[]
  value: T | null
  onChange: (v: T) => void
  className?: string
}

/** Grupo de opções com inputs radio reais (teclado e leitores de tela funcionam). */
export function RadioGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  className = 'grid gap-2',
}: RadioGroupProps<T>) {
  return (
    <div className={className}>
      {options.map((o) => (
        <label key={o.value} className="option">
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(o.value)}
            className="size-4 shrink-0 accent-teal"
          />
          <span className="flex-1">{o.label}</span>
        </label>
      ))}
    </div>
  )
}
