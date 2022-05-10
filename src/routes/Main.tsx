import { useContext, useEffect, useState } from "react"

import Login from "../components/Login/Login"
import Home from "../components/Home/Home"
import Context from "../context/context"
import Loader from "../components/Loader/Loader"
import { whoami } from "../services/whoami"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const { user, setUser, setName } = useContext(Context)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    whoami(`${token}`)
      .then((res) => {
        setUser(res.username)
        setName(res.name)
      })
      .catch((e) => {
        navigate("/404")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setUser, navigate, setName])

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <Loader /> : user ? <Home /> : <Login />}
    </div>
  )
}

export default Main
