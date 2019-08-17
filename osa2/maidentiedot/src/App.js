import React, { useState, useEffect } from 'react'
import Countries from './components/Countries.js'
import SearchHandler from './components/SearchHandler'
import axios from 'axios'

function App() {

  const [ countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const handleFilterInput = event => setFilter(event.target.value)

  const countryList = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <SearchHandler filter={filter} onChange={handleFilterInput}/>
      <Countries countries={countryList}/>
    </div>
  );
}

export default App;
