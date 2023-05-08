import styles from '@components/CountryCard/CountryCard.module.css'

const { card, informations, flag, field } = styles

export default function CountryCard({ country }) {
  return (
    <li key={country.name.common} className={card}>
      <div className={flag}>
        <img src={country.flags.png} alt="country flag" />
      </div>
      <div className={informations}>
        <h3>{country.name.common}</h3>
        <p>
          <span className={field}>population: </span>
          {country.population}
        </p>
        <p>
          <span className={field}>region: </span>
          {country.region}
        </p>
        <p>
          <span className={field}>capital: </span>
          {country.capital}
        </p>
      </div>
    </li>
  )
}
