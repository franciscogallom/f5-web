import { FC, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import "./navbar.scss"
import icon from "../../assets/icon-transparent.png"

const Navbar: FC = () => {
  const [active, setActive] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <div className="navbar">
        <img className="icon" src={icon} alt="f5" />
        <div className={`links-container ${active ? "active" : ""}`}>
          <Link className={pathname === "/" ? "active-link" : ""} to={"/"}>
            Home
          </Link>
          <Link className={pathname === "/profile" ? "active-link" : ""} to={"/profile"}>
            Mi cuenta
          </Link>
        </div>
        {/* Burger Button */}
        <div
          className={`burger-btn ${active ? "open" : ""}`}
          onClick={() => setActive((prevState) => !prevState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}

export default Navbar
