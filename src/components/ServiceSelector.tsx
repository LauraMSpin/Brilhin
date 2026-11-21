import { services } from '../config/services'
import type { ServiceId } from '../types/booking'
import { RadioGroup, StepHeader } from './FormParts'

type Props = { value: ServiceId | null; onChange: (v: ServiceId) => void }

export default function ServiceSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <StepHeader n={1} title="Selecione o serviço" />
      <RadioGroup
        name="servico"
        value={value}
        onChange={onChange}
        options={services.map((s) => ({ value: s.id, label: s.name }))}
      />
    </fieldset>
  )
}
