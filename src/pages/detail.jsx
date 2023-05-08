import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@src/components/Layout'

import styles from '@src/styles/Detail.module.css'
const { details, card, title, link, flag, fieldWraper, field, bordersStyle } = styles

export default function Detail() {
  const [data, setData] = useState([])
  const [bordersData, setBordersData] = useState({})
  const router = useRouter()
  const { country_name } = router.query
  const url = country_name
    ? `https://restcountries.com/v3.1/name/${country_name}`
    : null

  useEffect(() => {
    async function fetchData() {
      if (url) {
        const response = await fetch(url)
        const json = await response.json()
        setData(json[0])
      }
    }
    fetchData()
  }, [url])

  useEffect(() => {
    async function fetchBordersData() {
      if (data.borders) {
        const bordersInfo = {}
        for (const border of data.borders) {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
          )
          const json = await response.json()
          bordersInfo[border] = json[0]
        }
        setBordersData(bordersInfo)
      }
    }
    fetchBordersData()
  }, [data.borders])

  const borders = data.borders || []

  return (
    <Layout>
      <div className={details}>
        <Link href="/" className={link}>
          back
        </Link>

        <div className={card}>
          {data.flags?.png && (
            <>
              <div className={flag}>
                <img src={data.flags.png} alt={data.flags.alt} />
              </div>

              <h3 className={title}>{data.name.common}</h3>

              <div className={fieldWraper}>
                <span className={field}>native name: </span>

                {
                  data.name.nativeName[Object.keys(data.name.nativeName)[0]]
                    .common
                }
              </div>
              <div className={fieldWraper}>
                <span className={field}>population: </span>
                {data.population}
              </div>

              <div className={fieldWraper}>
                <span className={field}>sub region: </span>
                {data.subregion}
              </div>

              <div className={fieldWraper}>
                <span className={field}>capital: </span>
                {data.capital}
              </div>

              <div className={fieldWraper}>
                <span className={field}>top level domain: </span>
                {data.cca2}
              </div>

              <div className={fieldWraper}>
                <span className={field}>currency: </span>
                {data.currencies[Object.keys(data.currencies)[0]].name}
              </div>

              <div className={fieldWraper}>
                <span className={field}>languages: </span>
                {data.languages[Object.keys(data.languages)[0]]}
              </div>

              <div className={fieldWraper}>
                <span className={field}>borders: </span>
              </div>
              <div className={bordersStyle}>
                {borders.map((border) => (
                  <Link
                    className={link}
                    key={border}
                    href={`./detail?&country_name=${bordersData[border]?.name?.common}`}
                  >
                    {bordersData[border]?.name?.common || 'Loading...'}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
