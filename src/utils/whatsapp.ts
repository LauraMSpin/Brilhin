import { contact } from '../config/contact'
import { propertySizes, services } from '../config/services'
import type { Booking } from '../types/booking'
import { formatDateBR } from './dateUtils'

export const whatsappLink = (text?: string) =>
  `https://wa.me/${contact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export function buildBookingMessage(b: Booking): string {
  const service = services.find((s) => s.id === b.service)?.name ?? ''
  const size = propertySizes.find((s) => s.id === b.size)?.label ?? ''
  return [
    'Olá! Gostaria de solicitar um orçamento com a Brilhin! 🧹✨',
    '',
    `*Serviço:* ${service}`,
    `*Metragem:* ${size}`,
    `*Tipo de imóvel:* ${b.propertyType ?? ''}`,
    `*Quartos:* ${b.bedrooms ?? ''}`,
    `*Banheiros:* ${b.bathrooms ?? ''}`,
    `*Bairro:* ${b.neighborhood.trim()}`,
    `*Data desejada:* ${b.date ? formatDateBR(b.date) : ''}`,
    '',
    'Poderiam confirmar a disponibilidade e informar o orçamento?',
  ].join('\n')
}

export const GENERIC_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da Brilhin.'
