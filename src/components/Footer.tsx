import { MapPin } from 'lucide-react'
import { contact } from '../config/contact'
import { navLinks } from '../config/navigation'
import { asset } from '../utils/assets'
import { GENERIC_MESSAGE, whatsappLink } from '../utils/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contato" className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full border-[18px] border-teal/40"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          {/* O logo tem fundo branco, então fica num cartão branco */}
          <a href="#inicio" className="inline-block rounded-2xl bg-white p-3" aria-label="Brilhin — voltar ao início">
            <img
              src={asset('logo-brilhin-referencia.png')}
              alt="Brilhin — Limpeza Residencial e Pós-Obra"
              width={486}
              height={495}
              loading="lazy"
              className="h-24 w-auto"
            />
          </a>
        </div>

        <div>
          <h2 className="text-lg font-bold">Fale com a Brilhin</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li>
              <a
                href={whatsappLink(GENERIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-teal"
              >
                <WhatsAppIcon className="size-5 text-teal" />
                {contact.whatsappDisplay}
              </a>
            </li>
            {contact.serviceArea && (
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-5 text-teal" aria-hidden="true" />
                {contact.serviceArea}
              </li>
            )}
            {contact.instagramUrl && (
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-teal"
                >
                  <InstagramIcon className="size-5 text-teal" />
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-lg font-bold">Navegação</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/85">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-teal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/70">
        © {year} Brilhin — Limpeza Residencial e Pós-Obra. Todos os direitos reservados.
      </div>
    </footer>
  )
}
