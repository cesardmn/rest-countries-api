import styles from '@src/styles/Layout.module.css'
import Navbar from './NavBar'

const { layout, header, main, footer } = styles

const date = new Date().getFullYear()

export default function Layout(props) {
  return (
    <div className={layout}>
      <header className={header}>
        <Navbar />
      </header>
      <main className={main}>{props.children}</main>
      <footer className={footer}>Copyright © Cesar Dimi - ${date}</footer>
    </div>
  )
}
