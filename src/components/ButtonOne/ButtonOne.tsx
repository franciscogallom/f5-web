import "./buttonOne.scss"
import Loader from "../Loader/Loader"
import { IButtonOne } from "../../interfaces/props"

const ButtonOne = ({ text, loading }: IButtonOne) => {
  return <button className="button-one">{loading ? <Loader small black /> : text}</button>
}

export default ButtonOne
