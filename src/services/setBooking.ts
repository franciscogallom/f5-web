import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  error: boolean
  message: string
}

export const setBooking = (
  fieldUsername: string,
  day: number,
  field: number,
  hour: number,
  username: string,
  phone: string
): Promise<Response> =>
  axios
    .post(`${API_URL_BASE}/bookings/set-booking/${fieldUsername}`, {
      day,
      field,
      hour,
      username,
      phone,
    })
    .then(({ data }) => data)
