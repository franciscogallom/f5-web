import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

export const requestInscription = (
  name: string,
  email: string,
  location: string,
  phone: string
): Promise<string> =>
  axios
    .post(`${API_URL_BASE}/fields/request-inscription`, {
      name,
      location,
      phone,
      email,
    })
    .then((res) => res.data)
