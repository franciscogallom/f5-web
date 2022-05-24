import Navbar from "../omponentsSDS/Navbar/Navbar"
import SetBooking from "../omponentsSDS/SetBooking/SetBooking"

function FixedBookings() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SetBooking />
      </div>
    </>
  )
}

export default FixedBookings
