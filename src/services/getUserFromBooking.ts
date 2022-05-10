import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  username: string
  phone: string
}

export const getUserFromBooking = (
  fieldUsername: string,
  field: string,
  hour: number
): Promise<Response> =>
  axios
    .post(`${API_URL_BASE}/bookings/user/${fieldUsername}`, {
      field,
      hour,
    })
    .then((response) => response.data)
