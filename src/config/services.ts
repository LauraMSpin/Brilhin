import type { PropertySize, PropertyType, RoomCount, Service } from '../types/booking'

/**
 * Serviços oferecidos.
 * priceFrom: valor "a partir de" em reais (ex.: 150). Enquanto estiver null,
 * o preço não aparece no site.
 * image: nome do arquivo dentro de public/assets.
 */
export const services: Service[] = [
  {
    id: 'tradicional',
    name: 'Limpeza Tradicional',
    description:
      'Limpeza de manutenção para deixar sua casa organizada, limpa e agradável no dia a dia.',
    image: 'limpeza-tradicional.png',
    imageAlt: 'Mão com luva turquesa limpando uma superfície com pano',
    priceFrom: null,
  },
  {
    id: 'pesada',
    name: 'Limpeza Pesada',
    description:
      'Limpeza profunda para ambientes que precisam de atenção especial, com cuidado nos detalhes.',
    image: 'limpeza-pesada.png',
    imageAlt: 'Mop turquesa limpando o piso',
    priceFrom: null,
  },
  {
    id: 'pos-obra',
    name: 'Limpeza Pós-Obra',
    description:
      'Limpeza especializada para remover poeira e resíduos após construções e reformas.',
    image: 'limpeza-pos-obra.png',
    imageAlt: 'Capacete de obra amarelo sobre piso com resíduos',
    priceFrom: null,
  },
  {
    id: 'pos-mudanca',
    name: 'Limpeza Pós-Mudança',
    description:
      'Preparação do imóvel antes ou depois de uma mudança, com limpeza completa dos ambientes.',
    image: 'limpeza-pos-mudanca.png',
    imageAlt: 'Caixas de mudança e uma planta em um ambiente claro',
    priceFrom: null,
  },
]

export const propertySizes: { id: PropertySize; label: string }[] = [
  { id: 'ate-50', label: 'Até 50 m²' },
  { id: '51-100', label: '51 a 100 m²' },
  { id: '101-150', label: '101 a 150 m²' },
  { id: '151-200', label: '151 a 200 m²' },
  { id: 'acima-200', label: 'Acima de 200 m²' },
]

export const propertyTypes: PropertyType[] = ['Apartamento', 'Casa', 'Outro']

export const roomCounts: RoomCount[] = ['1', '2', '3', '4 ou mais']

export const PRICE_DISCLAIMER =
  'Valores iniciais de referência. O preço final é combinado com nossa equipe pelo WhatsApp, conforme o imóvel e o serviço.'
