import { useRef } from 'react'
import { HiSearch } from 'react-icons/hi'

import { useFilter } from '@src/providers/FilterProvider'

import styles from '@src/styles/SearchBar.module.css'

const { filterhWraper, searchWraper, icon, select } = styles

export default function SearchBar() {
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
    <div className={filterhWraper}>
      <div className={searchWraper}>
        <HiSearch className={icon} />
        <input
          type="search"
          name="search"
          id="search"
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
        ref={selectRef}
        onChange={(e) => {
          handleInput(e)
        }}
        className={select}
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
