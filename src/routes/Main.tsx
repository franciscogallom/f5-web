import { useContext, useEffect } from "react"

import Login from "../components/Login/Login"
import Home from "../components/Home/Home"
import Context from "../context/context"
import { whoami } from "../services/whoami"

const Main = () => {
  const { user, setUser } = useContext(Context)

  useEffect(() => {
    const token = localStorage.getItem("token")
    whoami(`${token}`)
      .then((res) => {
        setUser(res.username)
      })
      .catch((e) => {
        // TO-DO: navigate to /404.
        console.log(e)
      })
  }, [user, setUser])

  return user ? <Home /> : <Login />
}

export default Main
