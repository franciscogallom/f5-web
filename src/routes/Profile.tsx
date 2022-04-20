import "../App.scss"
import { Link } from "react-router-dom"

function Profile() {
  return (
    <div className="App">
      <h1>Perfil</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Profile
