import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Login from "../components/Login/Login"
import Home from "../components/Home/Home"
import Context from "../context/context"
import Loader from "../components/Loader/Loader"
import { whoami } from "../services/whoami"

const Main = () => {
  const { user, setUser, setName, setMongoID } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      whoami(token)
        .then((res) => {
          setUser(res.username)
          setName(res.name)
          setMongoID(res.idMongo)
        })
        .catch((e) => {
          navigate("/404")
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [setUser, navigate, setName, setMongoID])

  return loading ? <Loader fullscreen /> : user ? <Home /> : <Login />
}

export default Main
