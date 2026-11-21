import { addDays, format, isAfter, isBefore, startOfDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { availability } from '../config/availability'

export const firstAvailableDay = () =>
  addDays(startOfDay(new Date()), availability.minAdvanceDays)

export const lastAvailableDay = () =>
  addDays(startOfDay(new Date()), availability.maxAdvanceDays)

const toKey = (d: Date) => format(d, 'yyyy-MM-dd')

export function isDateAvailable(date: Date): boolean {
  const day = startOfDay(date)
  if (isBefore(day, firstAvailableDay())) return false
  if (isAfter(day, lastAvailableDay())) return false
  if (!availability.enabledWeekdays.includes(day.getDay())) return false
  if (availability.blockedDates.includes(toKey(day))) return false
  return true
}

export const formatDateBR = (date: Date) => format(date, 'dd/MM/yyyy')

export const formatDateLong = (date: Date) =>
  format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })

export const formatMonthTitle = (date: Date) => {
  const s = format(date, "MMMM 'de' yyyy", { locale: ptBR })
  return s.charAt(0).toUpperCase() + s.slice(1)
}
