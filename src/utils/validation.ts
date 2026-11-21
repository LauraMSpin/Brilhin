import type { Booking } from '../types/booking'
import { isDateAvailable } from './dateUtils'

export const MIN_NEIGHBORHOOD_LENGTH = 2

/** Campos obrigatórios de cada etapa, com o rótulo exibido quando faltam. */
const checks: { step: number; label: string; ok: (b: Booking) => boolean }[] = [
  { step: 1, label: 'Serviço', ok: (b) => b.service !== null },
  { step: 2, label: 'Metragem', ok: (b) => b.size !== null },
  { step: 3, label: 'Tipo de imóvel', ok: (b) => b.propertyType !== null },
  { step: 3, label: 'Quartos', ok: (b) => b.bedrooms !== null },
  { step: 3, label: 'Banheiros', ok: (b) => b.bathrooms !== null },
  {
    step: 3,
    label: 'Bairro ou região',
    ok: (b) => b.neighborhood.trim().length >= MIN_NEIGHBORHOOD_LENGTH,
  },
  // A data é revalidada: se a página ficar aberta de um dia para o outro,
  // uma data escolhida antes pode deixar de ser válida.
  { step: 4, label: 'Data desejada', ok: (b) => b.date !== null && isDateAvailable(b.date) },
]

export const missingFields = (b: Booking, step?: number) =>
  checks.filter((c) => (step === undefined || c.step === step) && !c.ok(b)).map((c) => c.label)

export const isStepValid = (b: Booking, step: number) => missingFields(b, step).length === 0
