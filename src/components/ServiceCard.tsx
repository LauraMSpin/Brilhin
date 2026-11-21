import { ChevronRight, HardHat, House, Sparkles, Truck, type LucideIcon } from 'lucide-react'
import { PRICE_DISCLAIMER } from '../config/services'
import type { Service, ServiceId } from '../types/booking'
import { asset } from '../utils/assets'
import { formatPrice } from '../utils/format'

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  tradicional: House,
  pesada: Sparkles,
  'pos-obra': HardHat,
  'pos-mudanca': Truck,
}

type Props = { service: Service; onRequest: (id: ServiceId) => void }

export default function ServiceCard({ service, onRequest }: Props) {
  const Icon = serviceIcons[service.id]
  return (
    <article className="group flex h-full overflow-hidden rounded-2xl border border-mist/70 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className="w-[38%] shrink-0 overflow-hidden bg-cloud">
        <img
          src={asset(service.image)}
          alt={service.imageAlt}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <Icon className="size-7 text-teal" strokeWidth={1.6} aria-hidden="true" />
        <h3 className="mt-2 text-lg leading-tight font-bold text-navy">{service.name}</h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink sm:text-[13px]">{service.description}</p>
        {service.priceFrom !== null && (
          <p className="mt-2 text-sm text-navy" title={PRICE_DISCLAIMER}>
            A partir de <strong className="text-teal-dark">{formatPrice(service.priceFrom)}</strong>
            <span aria-hidden="true">*</span>
          </p>
        )}
        <button
          type="button"
          onClick={() => onRequest(service.id)}
          className="mt-3 inline-flex items-center gap-1 self-start text-sm font-bold text-teal-dark hover:text-navy"
        >
          Solicitar serviço
          <span className="grid size-6 place-items-center rounded-full bg-teal-soft transition group-hover:bg-teal group-hover:text-white">
            <ChevronRight className="size-4" aria-hidden="true" />
          </span>
          <span className="sr-only">: {service.name}</span>
        </button>
      </div>
    </article>
  )
}
