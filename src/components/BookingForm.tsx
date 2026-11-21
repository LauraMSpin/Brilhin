import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Booking } from '../types/booking'
import { asset } from '../utils/assets'
import { isStepValid, missingFields } from '../utils/validation'
import BookingSummary from './BookingSummary'
import DateSelector from './DateSelector'
import PropertyDetails from './PropertyDetails'
import PropertySizeSelector from './PropertySizeSelector'
import ServiceSelector from './ServiceSelector'

const TOTAL_STEPS = 5
const stepNames = ['Serviço', 'Metragem', 'Imóvel', 'Data', 'Resumo']

type Props = {
  booking: Booking
  update: (patch: Partial<Booking>) => void
  /** Etapa visível no celular. No desktop, todas aparecem juntas. */
  step: number
  setStep: (n: number) => void
}

export default function BookingForm({ booking, update, step, setStep }: Props) {
  const [showError, setShowError] = useState(false)

  const goTo = (n: number) => {
    setShowError(false)
    setStep(n)
    document.getElementById('orcamento')?.scrollIntoView({ block: 'start' })
  }

  const next = () => {
    if (!isStepValid(booking, step)) {
      setShowError(true)
      return
    }
    goTo(step + 1)
  }

  // No celular só a etapa atual aparece; a partir de lg, todas.
  const vis = (n: number) => (step === n ? 'block' : 'hidden lg:block')
  const panel = 'rounded-2xl bg-white p-4 sm:p-5 lg:ring-1 lg:ring-mist/70'

  return (
    <section id="orcamento" className="bg-gradient-to-b from-white to-cloud py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-cloud/60 shadow-card ring-1 ring-mist/60">
          <div className="grid lg:grid-cols-[17rem_1fr]">
            {/* Introdução */}
            <div className="relative bg-gradient-to-br from-white to-teal-soft/60 p-6 sm:p-8">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
                Solicite seu
                <span className="block font-script text-4xl text-teal sm:text-[2.6rem]">orçamento online</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                Escolha o serviço, informe o tamanho do imóvel e selecione a data desejada.
              </p>
              <p className="mt-3 hidden text-sm leading-relaxed text-ink lg:block">
                Depois é só continuar pelo WhatsApp para finalizar seu agendamento com nossa equipe.
              </p>
              <img
                src={asset('a_clean_high_quality_realistic_vector_3d_style_i.png')}
                alt=""
                width={1774}
                height={887}
                loading="lazy"
                className="mt-6 hidden w-full lg:block"
              />
            </div>

            <form className="p-4 sm:p-6" onSubmit={(e) => e.preventDefault()} noValidate>
              {/* Progresso (celular) */}
              <ol className="mb-5 flex items-center gap-1.5 lg:hidden" aria-label="Etapas">
                {stepNames.map((name, i) => {
                  const n = i + 1
                  return (
                    <li key={name} className="flex-1">
                      <span
                        className={`block h-1.5 rounded-full ${n <= step ? 'bg-teal' : 'bg-mist'}`}
                        aria-hidden="true"
                      />
                      <span className={`mt-1 block text-center text-[10px] font-semibold ${n === step ? 'text-navy' : 'text-ink/50'}`}>
                        <span className="sr-only">{n === step ? 'Etapa atual: ' : ''}</span>
                        {name}
                      </span>
                    </li>
                  )
                })}
              </ol>

              <div className="grid gap-4 lg:grid-cols-3">
                <div className={`${vis(1)} ${panel}`}>
                  <ServiceSelector value={booking.service} onChange={(v) => update({ service: v })} />
                </div>
                <div className={`${vis(2)} ${panel}`}>
                  <PropertySizeSelector value={booking.size} onChange={(v) => update({ size: v })} />
                </div>
                <div className={`${vis(3)} ${panel}`}>
                  <PropertyDetails booking={booking} update={update} />
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
                <div className={`${vis(4)} ${panel}`}>
                  <DateSelector value={booking.date} onChange={(d) => update({ date: d })} />
                </div>
                <div className={vis(5)}>
                  <BookingSummary booking={booking} />
                </div>
              </div>

              {/* Navegação entre etapas (celular) */}
              <div className="mt-5 lg:hidden">
                {showError && step < TOTAL_STEPS && (
                  <p role="alert" className="mb-3 rounded-lg bg-teal-soft px-3 py-2 text-sm font-medium text-navy">
                    Para continuar, preencha: {missingFields(booking, step).join(', ')}.
                  </p>
                )}
                <div className="flex gap-3">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => goTo(step - 1)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-mist bg-white px-5 py-3 font-bold text-navy"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" /> Voltar
                    </button>
                  )}
                  {step < TOTAL_STEPS && (
                    <button type="button" onClick={next} className="btn-primary flex-1">
                      Continuar <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
