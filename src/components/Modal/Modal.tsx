import { FC } from "react"

import "./modal.scss"
import { IModal } from "../../interfaces/props"
import { colors } from "../../assets/colors"

const Modal: FC<IModal> = ({ hideModal, hour, label, status }) => {
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
            {/* TO-DO: Get user data */}
            <p className="booking-data">😺 franciscogallom</p>
            <p className="booking-data">📞 2314470987</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
