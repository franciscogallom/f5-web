import { BookingsEntity } from "./interfaces"

export interface IBookings {
  index: number
  startsAt: number
  fieldHours: boolean[]
}

export interface IAppointments {
  bookings: BookingsEntity[]
  startsAt: number
}
