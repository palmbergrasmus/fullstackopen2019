import React from 'react'
import Country from './Country.js'

const CountryList = ({ country }) => {

    return (
      <Country
          name={country.name}
          capital={country.capital}
          population={country.population}
          languages={country.languages}
          flag={country.flag}/>
    );
}

const Countries = ({ countries }) => {

  const length = countries.length

  return (
    <div>
      {length > 10
        ? <p>Too many matches, specify another filter</p>
        : (length === 1
            ? <Country
                name={countries[0].name}
                capital={countries[0].capital}
                population={countries[0].population}
                languages={countries[0].languages}
                flag={countries[0].flag}/>
            : (length === 0
                ? <p>no matches</p>
                : (countries.map((country, index) => <CountryList key={index} country={country}/>))))
      }
    </div>
  )
}

export default Countries
