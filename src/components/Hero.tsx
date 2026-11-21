import { ArrowRight, House, ShieldCheck, Sparkles } from 'lucide-react'
import { asset } from '../utils/assets'
import { WhatsAppIcon } from './BrandIcons'

const highlights = [
  { icon: ShieldCheck, label: 'Serviço de confiança' },
  { icon: House, label: 'Ambientes impecáveis' },
  { icon: Sparkles, label: 'Mais praticidade para você' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-cloud via-white to-white">
      {/* Imagem: no topo no celular, à direita no desktop */}
      <div className="relative aspect-[874/301] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[60%]">
        <img
          src={asset('hero-sala.png')}
          alt="Sala de estar clara e organizada, com sofá, almofadas e plantas"
          width={874}
          height={301}
          fetchPriority="high"
          className="size-full object-cover object-[70%_center]"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/30 to-transparent lg:block lg:w-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-20">
        <div className="max-w-xl animate-fade-up lg:max-w-[46%]">
          <h1 className="text-3xl leading-tight font-extrabold text-navy italic sm:text-4xl xl:text-5xl">
            Limpeza residencial e pós-obra com{' '}
            <span className="block font-script text-4xl leading-tight text-teal not-italic sm:text-5xl xl:text-6xl">
              qualidade e confiança
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base text-ink sm:text-lg">
            Deixe seu lar impecável ou seu imóvel pronto para uso com o cuidado e a praticidade que você merece.
          </p>
          <a href="#orcamento" className="btn-primary mt-7 w-full py-3.5 text-base sm:w-auto">
            <WhatsAppIcon />
            Solicitar orçamento
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>

          <ul className="mt-8 grid grid-cols-3 gap-2 text-xs font-medium text-navy sm:text-sm">
            {highlights.map(({ icon: Icon, label }, i) => (
              <li
                key={label}
                className={`flex flex-col items-center gap-1.5 text-center sm:flex-row sm:text-left ${
                  i > 0 ? 'sm:border-l sm:border-mist sm:pl-3' : ''
                }`}
              >
                <Icon className="size-7 shrink-0 text-teal" strokeWidth={1.6} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
