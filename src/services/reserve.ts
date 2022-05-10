import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  user: string
  date: string
  fieldUser: string
  hour: number
  field: string
  timestamp: string
  id: string
  cancelled: boolean
}

export const reserve = (id: string, field: string, hour: number, user: string): Promise<Response> =>
  axios
    .post(`${API_URL_BASE}/bookings/reserve`, {
      id,
      field,
      hour,
      user,
    })
    .then((response) => response.data)
