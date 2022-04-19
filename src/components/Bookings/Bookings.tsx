import { FC } from "react"
import "./Bookings.scss"

import { IBookings } from "../../interfaces/props"

const Bookings: FC<IBookings> = ({ index, startsAt, fieldHours }) => {
  return (
    <div>
      <p className="label">Cancha {index + 1}</p>
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
                if (status) {
                  alert(`Cancha libre a las ${hour}:00hs.`)
                } else {
                  alert("Cancha ocupada.")
                }
              }}
            >
              <p className="bookingText">{`${hour}`}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Bookings
