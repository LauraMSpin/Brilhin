import { PRICE_DISCLAIMER, services } from '../config/services'
import type { ServiceId } from '../types/booking'
import { formatPrice } from '../utils/format'
import { RadioGroup, StepHeader } from './FormParts'

type Props = { value: ServiceId | null; onChange: (v: ServiceId) => void }

export default function ServiceSelector({ value, onChange }: Props) {
  const selected = services.find((s) => s.id === value)
  return (
    <fieldset>
      <StepHeader n={1} title="Selecione o serviço" />
      <RadioGroup
        name="servico"
        value={value}
        onChange={onChange}
        options={services.map((s) => ({
          value: s.id,
          label:
            s.id === value && s.priceFrom !== null ? (
              <span className="flex flex-col">
                {s.name}
                <span className="animate-fade-up text-xs font-medium text-teal-dark">
                  A partir de <strong className="text-sm">{formatPrice(s.priceFrom)}</strong>*
                </span>
              </span>
            ) : (
              s.name
            ),
        }))}
      />
      <p className="mt-3 min-h-8 text-[11px] leading-snug text-ink/80" aria-live="polite">
        {selected?.priceFrom != null && `* ${PRICE_DISCLAIMER}`}
      </p>
    </fieldset>
  )
}
