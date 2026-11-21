import { PRICE_DISCLAIMER, services } from '../config/services'
import type { ServiceId } from '../types/booking'
import ServiceCard from './ServiceCard'

type Props = { onRequest: (id: ServiceId) => void }

export default function Services({ onRequest }: Props) {
  const hasPrices = services.some((s) => s.priceFrom !== null)
  return (
    <section id="servicos" className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="mt-2 text-center text-ink">Soluções completas de limpeza para cada necessidade do seu imóvel.</p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} onRequest={onRequest} />
          ))}
        </div>

        {hasPrices && <p className="mt-5 text-center text-xs text-ink/80">* {PRICE_DISCLAIMER}</p>}
      </div>
    </section>
  )
}
