import { useContext, useState } from "react"
import toast from "react-hot-toast"

import "./login.scss"
import { login } from "../../services/login"
import Context from "../../context/context"
import { Messages } from "../../assets/messages"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(Context)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(username, password)
      .then((res) => {
        if (res.error) {
          toast.error("Usuario y contraseña no coinciden.", { position: "bottom-center" })
        } else {
          toast.success("Inicio de sesión exitoso.", { position: "bottom-center" })
          localStorage.setItem("token", `${res.token}`)
          setUser(username)
        }
      })
      .catch((e) => {
        toast.error(Messages.error, { position: "bottom-center" })
        console.log(e)
      })
  }

  return (
    <div className="login-container">
      <form onSubmit={(e) => handleLogin(e)} className="login">
        <input
          type="text"
          placeholder="usuario."
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          placeholder="contraseña."
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className="login-btn">iniciar sesión</button>
      </form>
      <p className="add-my-field">Quiero sumar mi cancha!</p>
    </div>
  )
}

export default Login
