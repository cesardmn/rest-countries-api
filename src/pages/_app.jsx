import '@src/styles/globals.css'
import { ToggleThemeProvider } from '@providers/ToggleThemeProvider'

export default function App({ Component, pageProps }) {
  return (
    <ToggleThemeProvider>
      <Component {...pageProps} />
    </ToggleThemeProvider>
  )
}
