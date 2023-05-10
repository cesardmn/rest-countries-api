import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { useToggleTheme } from '@providers/ToggleThemeProvider'

import styles from '@src/styles/NavBar.module.css'

const { hero, title, themeToggleContainer, container } = styles

export default function Navbar() {
  const { setToggleTheme } = useToggleTheme()
  const [isDark, setIsDark] = useState()

  const changeTheme = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
      setToggleTheme('light')
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
    <nav className={hero}>
      <div className={container}>
        <h3 className={title}>Where in the World?</h3>
        <div className={themeToggleContainer} onClick={changeTheme}>
          {isDark ? <IoMoon /> : <IoMoonOutline />}
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  )
}
