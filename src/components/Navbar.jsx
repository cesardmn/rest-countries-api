import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { useToggleTheme } from '@providers/ToggleThemeProvider'

export default function Navbar() {
  const { toggleTheme, setToggleTheme } = useToggleTheme()
  const [isDark, setIsDark] = useState()

  const changeTheme = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
      setToggleTheme('ligth')
    } else {
      localStorage.setItem('theme', 'dark')
      setToggleTheme('dark')
    }
    setIsDark(!isDark)
  }

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (!theme) {
      localStorage.setItem('theme', 'dark')
      theme = 'dark'
    }
    setToggleTheme(theme)
    theme === 'dark' ? setIsDark(true) : setIsDark(false)
  }, [])

  return (
    <nav className="hero">
      <h3 className="title">Where in the World?</h3>
      <div className="theme-toggle-container" onClick={changeTheme}>
        {isDark ? <IoMoon /> : <IoMoonOutline />}
        <span>Dark Mode</span>
      </div>
    </nav>
  )
}
