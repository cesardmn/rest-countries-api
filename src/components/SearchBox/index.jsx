import styles from '@components/SearchBox/SearchBox.module.css'

import { HiSearch } from 'react-icons/hi'

export default function SearchBox() {
  return (
    <div className={styles.searchContainer}>
      
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
      
      <select name="" id="" className={styles.select}>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    
    </div>
  )
}
