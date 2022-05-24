import { useContext } from "react"
import Login from "../omponentsSDS/Login/Login"
import Navbar from "../omponentsSDS/Navbar/Navbar"
import Context from "../context/context"

function Profile() {
  const { user, setUser } = useContext(Context)

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser("")
  }

  return user ? (
    <>
      <Navbar />
      <div className="App">
        <h1>Perfil</h1>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </>
  ) : (
    <Login />
  )
}

export default Profile
