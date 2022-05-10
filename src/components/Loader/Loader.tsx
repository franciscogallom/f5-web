import { FC } from "react"

import "./loader.scss"
import { ILoader } from "../../interfaces/props"

const Loader: FC<ILoader> = ({ fullscreen }) => {
  return fullscreen ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div className="pulsar"></div>
    </div>
  ) : (
    <div className="pulsar"></div>
  )
}

export default Loader
