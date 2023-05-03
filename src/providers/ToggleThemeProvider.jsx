import { createContext, useContext, useState } from 'react'

export const ToggleThemeContext = createContext({})

export const ToggleThemeProvider = (props) => {
  const [toggleTheme, setToggleTheme] = useState('dark')

  return (
    <ToggleThemeContext.Provider
      value={{
        toggleTheme,
        setToggleTheme,
      }}
    >
      {props.children}
    </ToggleThemeContext.Provider>
  )
}

export const useToggleTheme = () => useContext(ToggleThemeContext)
