import { ArrowRight, CircleAlert } from 'lucide-react'
import { PRICE_DISCLAIMER, propertySizes, services } from '../config/services'
import type { Booking } from '../types/booking'
import { formatDateBR, isDateAvailable } from '../utils/dateUtils'
import { formatPrice } from '../utils/format'
import { missingFields } from '../utils/validation'
import { buildBookingMessage, whatsappLink } from '../utils/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

type Props = { booking: Booking }

export default function BookingSummary({ booking: b }: Props) {
  const service = services.find((s) => s.id === b.service)
  const missing = missingFields(b)
  const ready = missing.length === 0

  const rows: [string, string | undefined][] = [
    ['Serviço', service?.name],
    ['Metragem', propertySizes.find((s) => s.id === b.size)?.label],
    ['Tipo de imóvel', b.propertyType ?? undefined],
    ['Quartos', b.bedrooms ?? undefined],
    ['Banheiros', b.bathrooms ?? undefined],
    ['Bairro', b.neighborhood.trim() || undefined],
    ['Data desejada', b.date && isDateAvailable(b.date) ? formatDateBR(b.date) : undefined],
  ]

  return (
    <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-teal-soft/70 to-white p-5 ring-1 ring-teal/20">
      <h3 className="flex items-center gap-2.5 font-bold text-navy">
        <span className="grid size-7 place-items-center rounded-full bg-teal text-sm text-white">5</span>
        Resumo da solicitação
      </h3>

      <dl className="mt-4 grid gap-2 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-3 border-b border-mist/70 pb-1.5 last:border-0">
            <dt className="text-ink">{label}</dt>
            <dd className={`text-right font-semibold ${value ? 'text-navy' : 'text-ink/40'}`}>{value ?? '—'}</dd>
          </div>
        ))}
      </dl>

      {service?.priceFrom != null && (
        <div className="mt-4 rounded-xl bg-white p-3 text-sm ring-1 ring-mist">
          <p className="text-navy">
            A partir de <strong className="text-lg text-teal-dark">{formatPrice(service.priceFrom)}</strong>
          </p>
          <p className="mt-1 text-xs text-ink/80">{PRICE_DISCLAIMER}</p>
        </div>
      )}

      <div className="mt-auto pt-5">
        {ready ? (
          <a
            href={whatsappLink(buildBookingMessage(b))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full py-3.5"
          >
            <WhatsAppIcon />
            Solicitar pelo WhatsApp
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        ) : (
          <button type="button" disabled className="btn-primary w-full py-3.5">
            <WhatsAppIcon />
            Solicitar pelo WhatsApp
          </button>
        )}
        <p className="mt-3 flex gap-2 text-xs text-ink" aria-live="polite">
          {ready ? (
            'O WhatsApp abrirá em uma nova aba com a mensagem pronta. É só enviar!'
          ) : (
            <>
              <CircleAlert className="size-4 shrink-0 text-teal" aria-hidden="true" />
              <span>Falta preencher: {missing.join(', ')}.</span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
