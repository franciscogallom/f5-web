import { useContext, useEffect } from "react"

import Login from "../components/Login/Login"
import Home from "../components/Home/Home"
import Context from "../context/context"
import { whoami } from "../services/whoami"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    whoami(`${token}`)
      .then((res) => {
        setUser(res.username)
      })
      .catch((e) => {
        navigate("/404")
      })
  }, [user, setUser, navigate])

  return user ? <Home /> : <Login />
}

export default Main
