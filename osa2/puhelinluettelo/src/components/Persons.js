import React from 'react';

const Person = ({name, number}) => <p>{name} {number}</p>

const Persons = props => {
  const { persons, filter, onClick } = props
  return (
    <div>
      <h2>Numerot</h2>
      {persons.map((person, index) => person.name.toLowerCase().includes(filter.toLowerCase())
        ? <div className="personContainer" key={index}>
            <Person name={person.name} number={person.number}/>
            <button onClick={() => onClick(person.id)}>delete</button>
          </div>
        : null)}
    </div>
  )
}

export default Persons
