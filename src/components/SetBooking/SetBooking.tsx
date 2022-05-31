import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import "./SetBooking.scss"
import { getTimeRangeAndNumberOfField } from "../../services/getTimeRangeAndNumberOfField"
import Context from "../../context/context"
import ButtonTwo from "../ButtonTwo/ButtonTwo"
import Loader from "../Loader/Loader"
import { setBooking } from "../../services/setBooking"
import { Messages } from "../../assets/messages"

function SetBooking() {
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(false)
  const [day, setDay] = useState(1) // 1 = LUNES.
  const [field, setField] = useState(0) // 0 = CANCHA 1.
  const [hour, setHour] = useState(0) // Set in useEffect with first hour in hours array.
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [hours, setHours] = useState<Array<number>>([])
  const [fields, setFields] = useState<Array<number>>([])

  const { user } = useContext(Context)

  const navigate = useNavigate()

  useEffect(() => {
    setLoadingData(true)
    getTimeRangeAndNumberOfField(user)
      .then((res) => {
        setHours(res.hours)
        setFields(res.fields)
        setHour(res.hours[0])
      })
      .catch((e) => {
        console.log(e)
        navigate("/404")
      })
      .finally(() => {
        setLoadingData(false)
      })
  }, [user, navigate])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.length > 0 || phone.length > 0) {
      setLoading(true)
      setBooking(user, day, field, hour - hours[0], username, phone)
        .then((res) => {
          res.error
            ? toast.error(res.message, { position: "bottom-center" })
            : toast.success(res.message, { position: "bottom-center" })
        })
        .catch(() => {
          toast.error(Messages.error, { position: "bottom-center" })
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      toast.error("Ingrese a nombre de quien y un número de celular.", {
        position: "bottom-center",
      })
    }
  }

  return loadingData ? (
    <Loader />
  ) : (
    <form className="set-booking-container" onSubmit={handleSubmit}>
      <h1>Fijar turno.</h1>
      <div className="set-booking-settings">
        <div>
          <h5>DÍA</h5>
          <select onChange={({ target }) => setDay(Number(target.value))}>
            <option value="1">LUNES</option>
            <option value="2">MARTES</option>
            <option value="3">MIERCOLES</option>
            <option value="4">JUEVES</option>
            <option value="5">VIERNES</option>
            <option value="6">SÁBADO</option>
            <option value="0">DOMINGO</option>
          </select>
        </div>

        <div>
          <h5>CANCHA</h5>
          <select onChange={({ target }) => setField(Number(target.value))}>
            {fields.map((field) => (
              <option key={field} value={field}>
                CANCHA {field + 1}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h5>HORARIO</h5>
          <select onChange={({ target }) => setHour(Number(target.value))}>
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </div>
      </div>

      <input
        type="text"
        placeholder="a nombre de..."
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type="number"
        placeholder="número de celular."
        onChange={({ target }) => setPhone(target.value)}
      />

      <ButtonTwo text="confirmar" loading={loading} />
    </form>
  )
}

export default SetBooking
