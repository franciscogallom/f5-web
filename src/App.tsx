import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import "./App.scss"
import Panel from "./components/Panel/Panel"
import Navbar from "./components/Navbar/Navbar"
import { getBookingsByFieldUsername } from "./services/getBookings"
import { IBooking } from "./interfaces/interfaces"

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
