import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import axios from "axios"

import "./index.scss"
import { Toaster } from "react-hot-toast"
import { ContextProvider } from "./context/context"
import Profile from "./routes/Profile"
import NotFound from "./routes/404"
import Main from "./routes/Main"
import SignUp from "./routes/SignUp"

// Set authorization token for all axios request.
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Toaster />
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
