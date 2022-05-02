import { FC } from "react"
import "./panel.scss"

import Bookings from "../Bookings/Bookings"
import { IAppointments } from "../../interfaces/props"

const Panel: FC<IAppointments> = ({ bookings, startsAt }) => {
  return (
    <div className="container">
      {bookings.map((booking, index) => (
        <Bookings key={index} fieldHours={booking.hours} startsAt={startsAt} index={index} />
      ))}
    </div>
  )
}

export default Panel
