// // Generics
// type Indexable = {
//   id: number
// }

// // Entities

// export type Admin = Indexable & {
//   fullName: string
//   email: string
//   password: string
// }

// export type Address = Indexable & {
//   cep: string
//   number: number
//   complement: string
// }

// export type Professional = Indexable & {
//   fullName: string
//   email: string
//   password: string
//   specialties: string
//   addressId: Address['id']
// }

// export type Horary = Indexable & {
//   date: string
//   hour: string
//   specialty: string
//   price: number
// }

// export type Client = Indexable & {
//   fullName: string
//   email: string
//   password: string
//   professionalId: Professional['id']
//   addressId: Address['id']
//   horaryId: Horary['id']
// }
