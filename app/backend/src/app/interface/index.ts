export interface Entity {
  createdAt: Date
  updatedAt?: Date
}

export interface commonDates  {
  fullName?: string
  email: string
  password: string
}

export interface IAdmin extends commonDates, Entity {
  type: string
  addressId: AddressI['id']
}

export interface AdminI extends IAdmin {
  id: string
}

export interface IClient extends commonDates, Entity {
  professionalId: number
  addressId: number
  horaryId: number
}

export interface Clientt extends IClient {
  id: string
}

export interface IAddress extends Entity{
  cep: string
  number: number
  complement: string
}

export interface AddressI extends IAddress {
  id: string
}

export interface IProfessional extends Entity {
  fullName: string
  email: string
  password: string
  specialties: string
  type: string
  addressId: AddressI['id']
}

export interface ProfessionalI extends IProfessional {
  id: string
}

export interface ISpecialtie extends Entity {
  specialtie: string
  price: string
  description: string
  clientId: Clientt['id']
}

export interface SpecialtieI extends ISpecialtie {
  id: string
}

export interface IHorary extends Entity {
  date: string
  hour: string
  specialty: string
  price: number
  clientId: Clientt['id']
}

export interface HoraryI extends IHorary {
  id: string
}
