import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

import { requestInscription } from "../services/requestInscription"
import { Messages } from "../assets/messages"
import Input from "../omponentsSDS/Input/Input"
import ButtonOne from "../omponentsSDS/ButtonOne/ButtonOne"
import ContainerWithForm from "../omponentsSDS/ContainerWithForm/ContainerWithForm"

const SignUp = () => {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [price, setPrice] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.length === 0 || location.length === 0 || phone.length === 0 || price.length === 0) {
      toast.error(Messages.missingData, { position: "bottom-center" })
    } else {
      setLoading(true)
      requestInscription(name, location, phone, price)
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
      <Input type="text" placeholder="ubicación." handleOnChange={setLocation} />
      <Input type="text" placeholder="número del celular." handleOnChange={setPhone} />
      <Input type="text" placeholder="precio del turno." handleOnChange={setPrice} />
      <ButtonOne text="solicitar inscripción." loading={loading} />
    </ContainerWithForm>
  )
}

export default SignUp
