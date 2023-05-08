import { useRef } from 'react'
import styles from '@components/SearchBox/SearchBox.module.css'
import { HiSearch } from 'react-icons/hi'

import { useFilter } from '@src/providers/FilterProvider'

export default function SearchBox() {
  const { setFilter } = useFilter()

  const inputRef = useRef()
  const selectRef = useRef()

  const handleInput = (e) => {
    const input = inputRef.current.value
    const select = selectRef.current.value

    console.log(input, select)

    setFilter({
      name: input.toLowerCase(),
      region: select.toLowerCase(),
    })
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
          ref={inputRef}
          onChange={(e) => {
            handleInput(e)
          }}
        />
      </div>

      <select
        name=""
        id=""
        className={styles.select}
        ref={selectRef}
        onChange={(e) => {
          handleInput(e)
        }}
      >
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}
