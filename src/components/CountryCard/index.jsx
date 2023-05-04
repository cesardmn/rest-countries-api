export default function CountryCard({ country }) {
  return (
    <li key={country.name.common}>
      <img src={country.flags.png} alt="country flag" />
      <h3>{country.name.common}</h3>
      <p>population: {country.population}</p>
      <p>region: {country.region}</p>
      <p>capital: {country.capital}</p>
    </li>
  )
}
