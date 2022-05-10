import { createContext, useState } from "react"

type ContextType = {
  user: string
  setUser: React.Dispatch<React.SetStateAction<string>>
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Context = createContext<ContextType>({} as ContextType)

export const ContextProvider = ({ children }: any) => {
  const [user, setUser] = useState("")
  const [name, setName] = useState("")

  return <Context.Provider value={{ user, setUser, name, setName }}>{children}</Context.Provider>
}

export default Context
