export interface BookingsEntity {
  type: string
  hours: boolean[]
}

export interface IBooking {
  _id: string
  fieldUsername: string
  bookings: BookingsEntity[]
  startsAt: number
}

export interface IField {
  id: string
  name: string
  user: string
  password: string
  numberOfRatings: number
  sumOfRatings: number
  image: string
  location: string
  phone: string
  price: string
}
