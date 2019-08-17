import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Weather = ({ capital }) => {
  const [ location, setLocation ] = useState(null)

  const locationHook = () => {
    const string = `http://api.apixu.com/v1/current.json?key=745ee978f3f44434a2672315191605&q=${capital}` 

    axios
      .get(string)
      .then(response => {
        setLocation(response.data)
      })
  }
  useEffect(locationHook, [])

  const temperature = location !== null ? <p>temperature: {location.current.temp_c}</p> : null
  const condition = location !== null ? <img src={location.current.condition.icon} style={{ width: "10%" }} alt={location.current.condition.text}/> : null
  const wind = location !== null ? <p>wind: {location.current.wind_kph} kph direction {location.current.wind_dir}</p> : null

  return (
    <div>
      <h3>Weather in {capital}</h3>
      {temperature}
      {condition}
      {wind}
    </div>
  );
}

export default Weather
