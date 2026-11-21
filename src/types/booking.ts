export type ServiceId = 'tradicional' | 'pesada' | 'pos-obra' | 'pos-mudanca'

export type PropertySize = 'ate-50' | '51-100' | '101-150' | '151-200' | 'acima-200'

export type PropertyType = 'Apartamento' | 'Casa' | 'Outro'

export type RoomCount = '1' | '2' | '3' | '4 ou mais'

export interface Booking {
  service: ServiceId | null
  size: PropertySize | null
  propertyType: PropertyType | null
  bedrooms: RoomCount | null
  bathrooms: RoomCount | null
  neighborhood: string
  date: Date | null
}

export interface Service {
  id: ServiceId
  name: string
  description: string
  image: string
  imageAlt: string
  /** Preço inicial em reais. null = não exibir preço. */
  priceFrom: number | null
}
