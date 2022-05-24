import axios from "axios"

import { API_URL_BASE } from "./API_URL_BASE"

interface Response {
  hours: Array<number>
  fields: Array<number>
}

export const getTimeRangeAndNumberOfField = (fieldUsername: string): Promise<Response> =>
  axios.get(`${API_URL_BASE}/fields/range-and-quantity/${fieldUsername}`).then(({ data }) => data)
