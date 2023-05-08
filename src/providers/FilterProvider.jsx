import { createContext, useContext, useState } from 'react'

export const FilterContext = createContext({})

export const FilterProvider = (props) => {
  const [filter, setFilter] = useState({
    name: '',
    region: '',
  })

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
