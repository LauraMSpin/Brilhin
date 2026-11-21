import { useCallback, useState } from 'react'
import About from './components/About'
import Benefits from './components/Benefits'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import type { Booking, ServiceId } from './types/booking'

const emptyBooking: Booking = {
  service: null,
  size: null,
  propertyType: null,
  bedrooms: null,
  bathrooms: null,
  neighborhood: '',
  date: null,
}

export default function App() {
  const [booking, setBooking] = useState<Booking>(emptyBooking)
  const [step, setStep] = useState(1)

  const update = useCallback((patch: Partial<Booking>) => setBooking((b) => ({ ...b, ...patch })), [])

  // Card de serviço: seleciona o serviço, avança para a metragem (celular) e rola até o formulário.
  const requestService = (id: ServiceId) => {
    update({ service: id })
    setStep(2)
    document.getElementById('orcamento')?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <a
        href="#orcamento"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Ir para o formulário de orçamento
      </a>
      <Header />
      <main>
        <Hero />
        <Services onRequest={requestService} />
        <BookingForm booking={booking} update={update} step={step} setStep={setStep} />
        <Benefits />
        <About />
      </main>
      <Footer />
    </>
  )
}
