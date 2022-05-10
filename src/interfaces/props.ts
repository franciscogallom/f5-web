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

export interface IModal {
  hideModal: () => void
  hour: number
  label: string
  status: boolean
}

export interface ILoader {
  fullscreen?: boolean
}
