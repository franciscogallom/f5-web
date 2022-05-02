import { FC, useState } from "react"
import "./bookings.scss"

import { IBookings } from "../../interfaces/props"
import Modal from "../Modal/Modal"

const Bookings: FC<IBookings> = ({ index, startsAt, fieldHours }) => {
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState(false)
  const [hour, setHour] = useState(0)
  const label = `Cancha ${index + 1}`

  return (
    <>
      <div>
        <p className="label">{label}</p>
        <div className="booking">
          {fieldHours.map((status, i) => {
            const hour = startsAt + i
            return (
              <button
                key={i}
                className="bookingButton"
                style={{
                  backgroundColor: status ? "#0fa" : "#97168c",
                }}
                onClick={() => {
                  setStatus(status)
                  setHour(hour)
                  setShowModal(true)
                }}
              >
                <p className="bookingText">{`${hour}`}</p>
              </button>
            )
          })}
        </div>
      </div>
      {showModal && (
        <Modal hideModal={() => setShowModal(false)} hour={hour} label={label} status={status} />
      )}
    </>
  )
}

export default Bookings
