import { createContext, useState } from "react"

type ContextType = {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<ContextType>({} as ContextType)

export const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState("")

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
}

export default Context
