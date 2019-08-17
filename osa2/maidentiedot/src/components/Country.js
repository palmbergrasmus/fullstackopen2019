import React, { useState } from 'react';
import Weather from './Weather.js'

const Country = props => {

  const { name, capital, population, languages, flag } = props
  const [ collapsed, setCollapsed ] = useState(true)
  const text = collapsed ? "show" : "hide"

  const handlePress = () => setCollapsed(!collapsed)

  return (
    <div>
      { !collapsed
          ? (
              <>
                <h2>{name}</h2>
                <p>capital {capital}</p>
                <p>population {population}</p>
                <>
                  <h3>Languages</h3>
                  {languages.map((language, index) => (<p key={index}>{language.name}</p>))}
                </>
                <img src={flag} style={{width:'20%'}} alt="Flag"/>
                <Weather capital={capital}/>
              </>
            )
          : <p>{name}</p>
      }
      <button onClick={handlePress}>{text}</button>
    </div>
  );
}

export default Country
