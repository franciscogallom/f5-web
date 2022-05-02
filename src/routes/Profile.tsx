import { Link } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

function Profile() {
  return (
    <>
      <Navbar />
      <div className="">
        <h1>Perfil</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}

export default Profile
