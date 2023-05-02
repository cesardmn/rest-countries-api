import { IoMoon, IoMoonOutline } from 'react-icons/io5'

export default function Navbar() {
  return (
    <nav className="hero">
      <h3 className="title">Where in the World?</h3>
      <div className="theme-toggle-container">
        <IoMoonOutline className="not-selected-theme" />
        <IoMoon />
        <span>Dark Mode</span>
      </div>
    </nav>
  )
}
