import Head from 'next/head'
import { Nunito } from 'next/font/google'

import CountryCard from '@src/components/CountryCard'
import Layout from '@src/components/Layout'
import { useFilter } from '@src/providers/FilterProvider'
import { useEffect, useState } from 'react'
import SearchBar from '@src/components/SearchBar'

export default function Home({ countries }) {
  const { filter } = useFilter()
  const [show, setShow] = useState(
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
  )

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
      <Layout>
        <SearchBar />
        <ul className="cardGrid">
          {show.map((country) => {
            return <CountryCard key={country.name.common} country={country} />
          })}
        </ul>
      </Layout>
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
