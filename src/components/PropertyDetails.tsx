import { propertyTypes, roomCounts } from '../config/services'
import type { Booking } from '../types/booking'
import { RadioGroup, StepHeader } from './FormParts'

type Props = { booking: Booking; update: (patch: Partial<Booking>) => void }

const centered = '[&_.option]:justify-center [&_.option]:px-2 [&_.option]:py-2.5'
const chips = `grid grid-cols-4 gap-2 ${centered}`
const sub = 'mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/80'

export default function PropertyDetails({ booking, update }: Props) {
  return (
    <fieldset>
      <StepHeader n={3} title="Características do imóvel" />
      <div className="grid gap-4">
        <div role="group" aria-labelledby="lbl-tipo">
          <span id="lbl-tipo" className={sub}>
            Tipo de imóvel
          </span>
          <RadioGroup
            name="tipo"
            value={booking.propertyType}
            onChange={(v) => update({ propertyType: v })}
            options={propertyTypes.map((t) => ({ value: t, label: t }))}
            className="flex flex-wrap gap-2 [&_.option]:flex-auto [&_.option]:justify-center [&_.option]:px-3 [&_.option]:py-2.5"
          />
        </div>
        <div role="group" aria-labelledby="lbl-quartos">
          <span id="lbl-quartos" className={sub}>
            Quartos
          </span>
          <RadioGroup
            name="quartos"
            value={booking.bedrooms}
            onChange={(v) => update({ bedrooms: v })}
            options={roomCounts.map((c) => ({ value: c, label: c === '4 ou mais' ? '4+' : c }))}
            className={chips}
          />
        </div>
        <div role="group" aria-labelledby="lbl-banheiros">
          <span id="lbl-banheiros" className={sub}>
            Banheiros
          </span>
          <RadioGroup
            name="banheiros"
            value={booking.bathrooms}
            onChange={(v) => update({ bathrooms: v })}
            options={roomCounts.map((c) => ({ value: c, label: c === '4 ou mais' ? '4+' : c }))}
            className={chips}
          />
        </div>
        <div>
          <label htmlFor="bairro" className={sub}>
            Bairro ou região
          </label>
          <input
            id="bairro"
            type="text"
            value={booking.neighborhood}
            onChange={(e) => update({ neighborhood: e.target.value })}
            maxLength={60}
            autoComplete="address-level3"
            placeholder="Ex.: Savassi, Pampulha, Contagem…"
            className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-base text-navy placeholder:text-ink/50 focus:border-teal focus:outline-none focus-visible:outline-3 focus-visible:outline-teal sm:text-sm"
          />
          <p className="mt-1 text-xs text-ink/70">Não precisa informar o endereço completo.</p>
        </div>
      </div>
    </fieldset>
  )
}
