import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

// TO-DO: Change "any"
interface Response {
  error: boolean
  data: any
}

export const login = (username: string, password: string): Promise<Response> =>
  axios
    .post(`${API_URL_BASE}/fields/login`, { username, password })
    .then((response) => response.data)
