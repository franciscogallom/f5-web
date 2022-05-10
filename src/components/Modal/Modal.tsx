import { FC, FormEvent, useCallback, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

import "./modal.scss"
import { IModal } from "../../interfaces/props"
import { colors } from "../../assets/colors"
import { getUserFromBooking } from "../../services/getUserFromBooking"
import Context from "../../context/context"
import { Messages } from "../../assets/messages"

const Modal: FC<IModal> = ({ hideModal, hour, label, status }) => {
  const { user } = useContext(Context)
  const [username, setUsername] = useState<string>(Messages.loading)
  const [phone, setPhone] = useState<string>(Messages.loading)
  const [newBookingUser, setNewBookingUser] = useState("")

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hideModal()
      }
    },
    [hideModal]
  )

  useEffect(() => {
    const isRented = !status
    if (isRented) {
      getUserFromBooking(user, label, hour)
        .then((res) => {
          setUsername(res.username)
          setPhone(res.phone)
        })
        .catch((e) => {
          toast.error(Messages.error, { position: "bottom-center" })
          hideModal()
        })
    }

    document.addEventListener("keydown", escFunction, false)

    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [escFunction, hideModal, hour, label, user, status])

  const handleNewBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Turno reservado para ${newBookingUser}`)
  }

  return (
    <div className="modal-container">
      <div
        className="modal"
        style={{ backgroundColor: status ? colors.tertiary : colors.quaternary }}
      >
        <div className="booking-data">
          <p>⚽ {label}.</p>
          <p className="cross" onClick={hideModal}>
            ❌
          </p>
        </div>
        <p className="booking-data">🕔 {hour}:00hs.</p>
        {status && <p className="booking-data">👇 RESERVAR TURNO.</p>}
        {status ? (
          <form className="new-booking" onSubmit={(e) => handleNewBooking(e)}>
            <input
              type="text"
              placeholder="a nombre de..."
              onChange={({ target }) => setNewBookingUser(target.value)}
            />
            <button>Confirmar</button>
          </form>
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
