import "./Input.scss"
import { IInput } from "../../interfaces/props"

const Input = ({ type, placeholder, handleOnChange }: IInput) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={({ target }) => handleOnChange(target.value)}
    />
  )
}

export default Input
