import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

export const requestInscription = (
  name: string,
  location: string,
  phone: string,
  price: string
): Promise<string> =>
  axios
    .post(`${API_URL_BASE}/fields/request-inscription`, {
      name,
      location,
      phone,
      price,
    })
    .then((res) => res.data)
