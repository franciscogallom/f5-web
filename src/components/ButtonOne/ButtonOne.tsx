import "./ButtonOne.scss"
import Loader from "../Loader/Loader"
import { IButton } from "../../interfaces/props"

const ButtonOne = ({ text, loading }: IButton) => {
  return <button className="button-one">{loading ? <Loader small black /> : text}</button>
}

export default ButtonOne
