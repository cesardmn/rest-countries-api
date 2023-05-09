import styles from '@src/styles/Layout.module.css'
import Navbar from './NavBar'
import { Nunito } from 'next/font/google'
import { useToggleTheme } from '@providers/ToggleThemeProvider'

const { layout, header, main, footer, content } = styles

const date = new Date().getFullYear()
const nunito = Nunito({ subsets: ['latin'] })

export default function Layout(props) {
  const { toggleTheme } = useToggleTheme()
  return (
    <main className={`${nunito.className}  ${toggleTheme}`}>
      <div className={layout}>
        <header className={header}>
          <Navbar />
        </header>
        <main className={main}>
          <div className={content}>{props.children}</div>
        </main>
        <footer className={footer}>Copyright © Cesar Dimi - {date}</footer>
      </div>
    </main>
  )
}
