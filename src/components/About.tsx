import { CheckCircle2, MapPin } from 'lucide-react'
import { contact } from '../config/contact'
import { asset } from '../utils/assets'

const values = [
  'Atenção aos detalhes em cada ambiente',
  'Respeito ao seu espaço e à sua rotina',
  'Comunicação simples e direta pelo WhatsApp',
]

export default function About() {
  return (
    <section id="sobre" className="overflow-hidden py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-gradient-to-br from-teal/25 to-navy/10" aria-hidden="true" />
          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <img
              src={asset('logo-brilhin-referencia.png')}
              alt="Logotipo da Brilhin"
              width={486}
              height={495}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-64"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            Sobre a <span className="font-script text-4xl text-teal sm:text-5xl">Brilhin</span>
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-ink">
            <p>
              A Brilhin nasceu com um propósito simples: transformar ambientes e devolver a você o prazer de estar em
              um espaço limpo, organizado e acolhedor. Cuidamos da limpeza de residências do dia a dia e também de
              imóveis que acabaram de passar por uma obra, reforma ou mudança.
            </p>
            <p>
              Trabalhamos com cuidado, organização e atenção a cada detalhe, porque sabemos que a sua casa é muito
              mais do que um imóvel. Nosso objetivo é que você tenha mais tempo para o que importa, com a tranquilidade
              de saber que o seu espaço está em boas mãos.
            </p>
          </div>
          <ul className="mt-6 grid gap-2.5">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2.5 font-medium text-navy">
                <CheckCircle2 className="size-5 shrink-0 text-teal" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
          {contact.serviceArea && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-soft px-4 py-2 text-sm font-semibold text-navy">
              <MapPin className="size-4 text-teal-dark" aria-hidden="true" />
              Atendemos {contact.serviceArea}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
