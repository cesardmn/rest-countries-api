import Head from 'next/head'
import { Nunito } from 'next/font/google'

import { useToggleTheme } from '@providers/ToggleThemeProvider'

import Navbar from '@src/components/Navbar'
import SearchBox from '@src/components/SearchBox'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home({ countries }) {
  const { toggleTheme } = useToggleTheme()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${nunito.className}  ${toggleTheme}`}>
        <Navbar />
        <SearchBox />
        <div className="container">
          <ul>
            {countries.map((country, index) => {
              return (
                <li key={index}>
                  <img src={country.flags.png} alt="country flag" />
                  <h3>{country.name.common}</h3>
                  <p>population: {country.population}</p>
                  <p>region: {country.region}</p>
                  <p>capital: {country.capital}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags`
  )
  const countries = await res.json()
  return { props: { countries } }
}
