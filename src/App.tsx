import "./App.scss"
import Panel from "./components/Panel/Panel"

const BOOKINGS = {
  _id: "6251f1d21b173966bcbada52",
  fieldUsername: "elcilindro",
  bookings: [
    {
      hours: [false, true, false, false, true, true, true, false],
      type: "7",
    },
    {
      hours: [true, false, true, true, false, true, true, false],
      type: "7",
    },
  ],
  startsAt: 16,
}

function App() {
  return (
    <div className="App">
      <Panel bookings={BOOKINGS.bookings} startsAt={BOOKINGS.startsAt} />
    </div>
  )
}

export default App
