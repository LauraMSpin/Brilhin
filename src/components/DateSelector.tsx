import { useState } from 'react'
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { ChevronLeft, ChevronRight, Info } from 'lucide-react'
import {
  firstAvailableDay,
  formatDateLong,
  formatMonthTitle,
  isDateAvailable,
  lastAvailableDay,
} from '../utils/dateUtils'
import { StepHeader } from './FormParts'

const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

type Props = { value: Date | null; onChange: (d: Date) => void }

export default function DateSelector({ value, onChange }: Props) {
  const [month, setMonth] = useState(() => startOfMonth(value ?? firstAvailableDay()))

  const minMonth = startOfMonth(firstAvailableDay())
  const maxMonth = startOfMonth(lastAvailableDay())
  const canPrev = month > minMonth
  const canNext = month < maxMonth

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month), { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(month), { weekStartsOn: 1 }),
  })

  const navBtn =
    'grid size-9 place-items-center rounded-full text-navy hover:bg-teal-soft disabled:opacity-30 disabled:hover:bg-transparent'

  return (
    <fieldset>
      <StepHeader n={4} title="Escolha a data" />
      <div className="rounded-2xl border border-mist bg-white p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between">
          <button
            type="button"
            className={navBtn}
            disabled={!canPrev}
            onClick={() => setMonth((m) => addMonths(m, -1))}
            aria-label="Mês anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <p className="text-sm font-bold text-navy" aria-live="polite">
            {formatMonthTitle(month)}
          </p>
          <button
            type="button"
            className={navBtn}
            disabled={!canNext}
            onClick={() => setMonth((m) => addMonths(m, 1))}
            aria-label="Próximo mês"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-ink/70" aria-hidden="true">
          {weekDays.map((d) => (
            <span key={d} className="py-1">
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {days.map((day) => {
            if (!isSameMonth(day, month)) return <span key={day.toISOString()} />
            const available = isDateAvailable(day)
            const selected = value !== null && isSameDay(day, value)
            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={!available}
                onClick={() => onChange(day)}
                aria-pressed={selected}
                aria-label={`${formatDateLong(day)}${available ? '' : ' (indisponível)'}`}
                className={`mx-auto grid size-9 place-items-center rounded-full text-sm transition sm:size-10 ${
                  selected
                    ? 'bg-teal font-bold text-white shadow-card'
                    : available
                      ? 'font-semibold text-navy hover:bg-teal-soft'
                      : 'cursor-not-allowed text-ink/30'
                } ${isToday(day) && !selected ? 'ring-1 ring-mist' : ''}`}
              >
                {day.getDate()}
              </button>
            )
          })}
        </div>
      </div>
      <p className="mt-3 flex gap-2 text-xs leading-relaxed text-ink">
        <Info className="size-4 shrink-0 text-teal" aria-hidden="true" />
        A data selecionada está sujeita à confirmação de disponibilidade pela equipe Brilhin.
      </p>
    </fieldset>
  )
}
