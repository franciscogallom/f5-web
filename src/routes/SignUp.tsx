import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { requestInscription } from "../services/requestInscription"
import { Messages } from "../assets/messages"
import Input from "../components/Input/Input"
import ButtonOne from "../components/ButtonOne/ButtonOne"
import ContainerWithForm from "../components/ContainerWithForm/ContainerWithForm"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.length === 0 || location.length === 0 || phone.length === 0 || email.length === 0) {
      toast.error(Messages.missingData, { position: "bottom-center" })
    } else {
      setLoading(true)
      requestInscription(name, email, location, phone)
        .then((res) => {
          toast.success(res, { position: "bottom-center" })
          navigate("/")
        })
        .catch((e) => {
          console.log(e)
          toast.error(Messages.error, { position: "bottom-center" })
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <ContainerWithForm handleOnSubmit={handleInscription}>
      <Input type="text" placeholder="nombre del complejo." handleOnChange={setName} />
      <Input type="text" placeholder="dirección." handleOnChange={setLocation} />
      <Input type="email" placeholder="email de contacto." handleOnChange={setEmail} />
      <Input type="number" placeholder="número del celular." handleOnChange={setPhone} />
      <ButtonOne text="solicitar inscripción." loading={loading} />
    </ContainerWithForm>
  )
}

export default SignUp
