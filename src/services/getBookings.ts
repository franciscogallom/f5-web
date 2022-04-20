import axios from "axios"

import { IBooking } from "../interfaces/interfaces"
import { API_URL_BASE } from "./API_URL_BASE"

export const getBookingsByFieldUsername = (fieldUsername: string): Promise<IBooking> =>
  axios.get(`${API_URL_BASE}/bookings/${fieldUsername}`).then((response) => {
    return response.data
  })
