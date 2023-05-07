import styles from '@components/SearchBox/SearchBox.module.css'
import { HiSearch } from 'react-icons/hi'

import { useFilter } from '@src/providers/FilterProvider'

export default function SearchBox() {
  const { setFilter } = useFilter()

  const handleInput = (e) => {
    const input = e.target.value

    if (input === '') {
      setFilter('')
    } else {
      const filter = encodeURIComponent(input)
      setFilter({
        type: 'name',
        name: input,
      })
    }
  }

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
          onChange={(e) => {
            handleInput(e)
          }}
        />
      </div>

      <select name="" id="" className={styles.select}>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
