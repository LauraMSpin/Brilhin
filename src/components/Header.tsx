import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../config/navigation'
import { asset } from '../utils/assets'
import { WhatsAppIcon } from './BrandIcons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled || open ? 'shadow-card' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <a href="#inicio" onClick={close} className="flex shrink-0 items-center" aria-label="Brilhin — voltar ao início">
          <img
            src={asset('logo-brilhin-referencia.png')}
            alt="Brilhin — Limpeza Residencial e Pós-Obra"
            width={486}
            height={495}
            className="h-12 w-auto lg:h-16"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-semibold text-navy xl:gap-9">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-2 transition-colors hover:text-teal-dark after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded after:bg-teal after:transition-transform hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#orcamento" className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-navy hover:bg-cloud lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Menu móvel"
        className={`border-t border-mist bg-white lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 font-semibold text-navy hover:bg-teal-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="py-3 sm:hidden">
            <a href="#orcamento" onClick={close} className="btn-primary w-full">
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
