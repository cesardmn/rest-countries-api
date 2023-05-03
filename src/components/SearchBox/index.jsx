import styles from '@components/SearchBox/SearchBox.module.css'


import { HiSearch } from 'react-icons/hi'

export default function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <HiSearch className={styles.searchIcon} />
      <input
        type="search"
        name="search"
        id="search"
        className={styles.searchInput}
        placeholder="Search for a country..."
      />
    </div>
  )
}
