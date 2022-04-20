import "./App.scss"
import Panel from "./components/Panel/Panel"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
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
    <div className="App">
      {bookings && (
        <>
          <Panel bookings={bookings.bookings} startsAt={bookings.startsAt} />
          <Link to="/profile">Perfil</Link>
        </>
      )}
    </div>
  )
}

export default App
