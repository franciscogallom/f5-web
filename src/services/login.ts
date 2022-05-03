import axios from "axios"
import { IField } from "../interfaces/interfaces"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  error: boolean
  data: IField
  token: string | null
}

export const login = (username: string, password: string): Promise<Response> =>
  axios
    .post(`${API_URL_BASE}/fields/login`, { username, password })
    .then((response) => response.data)
