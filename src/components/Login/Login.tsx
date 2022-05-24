import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

import "./Login.scss"
import { login } from "../../services/login"
import Context from "../../context/context"
import { Messages } from "../../assets/messages"
import Input from "../Input/Input"
import ButtonOne from "../ButtonOne/ButtonOne"
import ContainerWithForm from "../ContainerWithForm/ContainerWithForm"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(Context)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.length === 0 || password.length === 0) {
      toast.error(Messages.missingData, { position: "bottom-center" })
    } else {
      setLoading(true)
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
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <ContainerWithForm handleOnSubmit={handleLogin}>
      <Input type="text" placeholder="usuario." handleOnChange={setUsername} />
      <Input type="password" placeholder="contraseña." handleOnChange={setPassword} />
      <ButtonOne text="iniciar sesión." loading={loading} />
      <Link to="/signup" className="add-my-field">
        Quiero sumar mi cancha!
      </Link>
    </ContainerWithForm>
  )
}

export default Login
