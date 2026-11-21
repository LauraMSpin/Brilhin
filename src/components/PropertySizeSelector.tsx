import { propertySizes } from '../config/services'
import type { PropertySize } from '../types/booking'
import { RadioGroup, StepHeader } from './FormParts'

type Props = { value: PropertySize | null; onChange: (v: PropertySize) => void }

export default function PropertySizeSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <StepHeader n={2} title="Tamanho do imóvel (m²)" />
      <RadioGroup
        name="metragem"
        value={value}
        onChange={onChange}
        options={propertySizes.map((s) => ({ value: s.id, label: s.label }))}
      />
    </fieldset>
  )
}
