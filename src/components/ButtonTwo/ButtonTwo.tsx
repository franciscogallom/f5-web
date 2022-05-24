import "./buttonTwo.scss"
import Loader from "../Loader/Loader"
import { IButton } from "../../interfaces/props"

const ButtonTwo = ({ text, loading }: IButton) => {
  return <button className="button-two">{loading ? <Loader small black /> : text}</button>
}

export default ButtonTwo
