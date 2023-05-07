import '@src/styles/globals.css'
import { ToggleThemeProvider } from '@providers/ToggleThemeProvider'
import { FilterProvider } from '@src/providers/FilterProvider'

export default function App({ Component, pageProps }) {
  return (
    <ToggleThemeProvider>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </ToggleThemeProvider>
  )
}
