import { useState } from "react"
import "./login.scss"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: any) => {
    e.preventDefault()
    alert(`usuario ${username} y password ${password}`)
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