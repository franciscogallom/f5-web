import "./ContainerWithForm.scss"
import { IContainerWithForm } from "../../interfaces/props"

const ContainerWithForm = ({ children, handleOnSubmit }: IContainerWithForm) => {
  return (
    <div className="login-container">
      <form onSubmit={(e) => handleOnSubmit(e)} className="login">
        {children}
      </form>
    </div>
  )
}

export default ContainerWithForm
