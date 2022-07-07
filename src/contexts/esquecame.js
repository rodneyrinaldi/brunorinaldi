import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export const EsquecameContext = createContext({})

export function EsquecameProvider({ children }) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }

  useEffect(() => {
    Cookies.set('level', String(level))
  }, [level])

  return (
    <EsquecameContext.Provider value={{ level: 1, levelUp }}>
      {children}
    </EsquecameContext.Provider>
  )
}