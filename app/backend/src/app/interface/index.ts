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
  addressId: Address['id']
}

export interface Admin extends IAdmin {
  id: string
}

export interface IClient extends commonDates, Entity {
  professionalId: number
  addressId: number
  horaryId: number
}

export interface Client extends IClient {
  id: string
}

export interface IAddress extends Entity{
  cep: string
  number: number
  complement: string
}

export interface Address extends IAddress {
  id: string
}

export interface IProfessional extends Entity {
  fullName: string
  email: string
  password: string
  specialties: string
  type: string
  addressId: Address['id']
}

export interface Professional extends IProfessional {
  id: string
}

export interface ISpecialtie extends Entity {
  specialtie: string
  price: string
  description: string
  clientId: Client['id']
}

export interface Specialtie extends ISpecialtie {
  id: string
}
