import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

// TO-DO: change return type.
export const login = (username: string, password: string): Promise<any> =>
  axios
    .post(`${API_URL_BASE}/fields/login`, { username, password })
    .then((response) => response.data)
