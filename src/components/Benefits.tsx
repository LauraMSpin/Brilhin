import { Clock, Headset, SprayCan, Users } from 'lucide-react'

const benefits = [
  { icon: Users, title: 'Equipe preparada', text: 'Profissionais preparados para cuidar do seu ambiente.' },
  { icon: SprayCan, title: 'Produtos adequados', text: 'Cuidados e produtos adequados para diferentes superfícies.' },
  { icon: Clock, title: 'Pontualidade', text: 'Organização e respeito aos horários combinados.' },
  { icon: Headset, title: 'Atendimento rápido', text: 'Solicite seu orçamento de maneira prática pelo WhatsApp.' },
]

export default function Benefits() {
  return (
    <section aria-labelledby="beneficios-titulo" className="bg-cloud py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="beneficios-titulo" className="section-title">
          Por que escolher a Brilhin?
        </h2>
        <ul className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
              <Icon className="size-10 shrink-0 text-teal" strokeWidth={1.4} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-1 text-sm text-ink">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
