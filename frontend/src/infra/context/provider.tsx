import { ReactNode } from "react"
import { AppContext, INITIAL_STATE } from "."


type AppContextProviderProps = {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {

  return (
    <AppContext.Provider value={{
      state: INITIAL_STATE
    }}>
      {children}
    </AppContext.Provider>
  )
}