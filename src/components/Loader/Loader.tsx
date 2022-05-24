import { FC } from "react"

import "./Loader.scss"
import { ILoader } from "../../interfaces/props"

const Loader: FC<ILoader> = ({ fullscreen, black, small }) => {
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
      <div className={`pulsar ${black ? "black" : ""} ${small ? "small" : ""}`}></div>
    </div>
  ) : (
    <div className={`pulsar ${black ? "black" : ""} ${small ? "small" : ""}`}></div>
  )
}

export default Loader
