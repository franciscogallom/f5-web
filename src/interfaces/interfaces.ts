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
