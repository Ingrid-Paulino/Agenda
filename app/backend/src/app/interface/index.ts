export interface Entity {
  createdAt: Date
  updatedAt?: Date
}

export interface commonDates  {
  fullName?: string
  email: string
  password: string
}

export interface IClient extends commonDates, Entity {
  professionalId: number
  addressId: number
  horaryId: number
}

export interface Client extends IClient {
  id: string
}
