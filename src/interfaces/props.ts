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
  black?: boolean
  small?: boolean
}

export interface IInput {
  type: string
  placeholder: string
  handleOnChange: (value: string) => void
}

export interface IButton {
  text: string
  loading: boolean
}

export interface IContainerWithForm {
  children: JSX.Element[]
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
