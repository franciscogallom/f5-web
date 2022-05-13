import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  idSQL: string
  idMongo: string
  username: string
  name: string
  iat: number
}

export const whoami = (token: string | null): Promise<Response> =>
  axios.post(`${API_URL_BASE}/fields/whoami`, { token }).then((response) => response.data)
