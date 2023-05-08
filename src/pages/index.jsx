import Head from 'next/head'
import { Nunito } from 'next/font/google'

import { useToggleTheme } from '@providers/ToggleThemeProvider'

// import Navbar from '@src/components/Navbar/NavBar'
// import SearchBox from '@src/components/SearchBox/SeaerchBar'
// import CountryCard from '@src/components/CountryCard/CountryCard'
import Layout from '@src/components/Layout'
import { useFilter } from '@src/providers/FilterProvider'
import { useEffect, useState } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home({ countries }) {
  const { toggleTheme } = useToggleTheme()
  const { filter } = useFilter()
  const [show, setShow] = useState(countries)

  useEffect(() => {
    if (filter.name === '' && filter.region === '') {
      setShow(countries)
    }

    if (filter.name !== '' && filter.region !== '') {
      setShow(
        countries.filter(
          (country) =>
            country.region.toLowerCase().includes(filter.region) &&
            country.name.common.toLowerCase().includes(filter.name)
        )
      )
    }

    if (filter.name === '' && filter.region !== '') {
      setShow(
        countries.filter((country) =>
          country.region.toLowerCase().includes(filter.region)
        )
      )
    }

    if (filter.name !== '' && filter.region === '') {
      setShow(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter.name)
        )
      )
    }
  }, [filter])

  return (
    <>
      <Head>
        <title>Countries Data</title>
        <meta name="description" content="Countries from REST Countries API." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${nunito.className}  ${toggleTheme}`}>
        {/* <Navbar />
        <SearchBox />
        <ul className="container">
          {show.map((country) => {
            return <CountryCard key={country.name.common} country={country} />
          })}
        </ul> */}

        <Layout>
          teste
        </Layout>
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
