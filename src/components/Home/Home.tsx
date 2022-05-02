import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import "./home.scss"
import Panel from "../Panel/Panel"
import Navbar from "../Navbar/Navbar"
import { getBookingsByFieldUsername } from "../../services/getBookings"
import { IBooking } from "../../interfaces/interfaces"

function App() {
  const [bookings, setBookings] = useState<IBooking>()
  const navigate = useNavigate()

  useEffect(() => {
    getBookingsByFieldUsername("elcilindro")
      .then((res) => {
        setBookings(res)
      })
      .catch((e) => {
        console.log(e)
        navigate("/404")
      })
  }, [navigate])

  return (
    <>
      <Navbar />
      <div className="App">
        {bookings && (
          <>
            <Panel bookings={bookings.bookings} startsAt={bookings.startsAt} />
          </>
        )}
      </div>
    </>
  )
}

export default App
