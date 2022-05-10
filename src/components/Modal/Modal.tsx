import { FC, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

import "./modal.scss"
import { IModal } from "../../interfaces/props"
import { colors } from "../../assets/colors"
import { getUserFromBooking } from "../../services/getUserFromBooking"
import Context from "../../context/context"
import { Messages } from "../../assets/messages"

const Modal: FC<IModal> = ({ hideModal, hour, label, status }) => {
  const { user } = useContext(Context)
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    getUserFromBooking(user, label, hour)
      .then((res) => {
        setUsername(res.username)
        setPhone(res.phone)
      })
      .catch((e) => {
        toast.error(Messages.error, { position: "bottom-center" })
        hideModal()
      })
  })

  return (
    <div className="modal-container">
      <div
        className="modal"
        style={{ backgroundColor: status ? colors.tertiary : colors.quaternary }}
      >
        <div className="booking-data">
          <p>⚽ {label}</p>
          <p style={{ cursor: "pointer" }} onClick={hideModal}>
            ❌
          </p>
        </div>
        <p className="booking-data">🕔 {hour}:00hs.</p>
        {status ? (
          <>
            <button>Alquilar cancha</button>
          </>
        ) : (
          <>
            <p className="booking-data">😺 {username}</p>
            <p className="booking-data">📞 {phone}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
