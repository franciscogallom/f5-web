import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./index.scss"
import Home from "./components/Home/Home"
import Profile from "./routes/Profile"
import NotFound from "./routes/404"
import Login from "./components/Login/Login"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={false ? <Home /> : <Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
