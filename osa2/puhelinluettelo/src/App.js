import React, { useState, useEffect } from 'react'
import FilterHandler from './components/FilterHandler.js'
import AddPerson from './components/AddPerson.js'
import Persons from './components/Persons.js'
import Notification from './components/Notification.js'
import { getAll, create, update, remove } from './modules/persons';
import './index.css';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [notificationStyling, setNotificationStyling] = useState('green')

  const addUser = (event) => {
    event.preventDefault();
    const personObj = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (!personObj) {
      create({ name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response));
          setNotificationStyling('green');
          setNotification(`Added ${newName}`);
          setTimeout(() => setNotification(null), 5000);
        });
      setNewName('');
      setNewNumber('');
    } else if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      personObj.number = newNumber;
      update(personObj)
        .then(() => {
          setPersons(persons.map(person => person.id === personObj.id ? personObj : person));
          setNotificationStyling('green');
          setNotification(`Updated ${newName} number to ${newNumber}`);
          setTimeout(() => setNotification(null), 5000);
          setNewName('');
          setNewNumber('')
        })
        .catch(() => {
          setNotificationStyling('red');
          setNotification(`${personObj.name} has failed to update`);
          setTimeout(() => setNotification(null), 5000);
        });
    }
  }

  const hook = () => {
    getAll().then(response => setPersons(response));
  }

  useEffect(hook, [])

  const handleNameInputChange = event => setNewName(event.target.value)

  const handleNumberInputChange = event => setNewNumber(event.target.value)

  const handleFilterInput = event => setFilter(event.target.value)

  const handleDeletePress = id => {
    const person = persons.find(person => person.id === id);
    if (!!person && window.confirm(`Delete ${person.name}?`)) {
      const personsFiltered = persons.filter(person => person.id !== id);
      remove(person)
        .then(() => {
          setPersons(personsFiltered);
          setNotificationStyling('green');
          setNotification(`Removed ${person.name}`);
          setTimeout(() => setNotification(null), 5000);
        })
        .catch(() => {
          setNotificationStyling('red');
          setNotification(`${person.name} has already been removed from the server`);
          setTimeout(() => setNotification(null), 5000);
        });
    } 
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification message={notification} color={notificationStyling}/>
      <FilterHandler filter={filter} onChange={handleFilterInput}/>
      <AddPerson
        onSubmit={addUser}
        valueName={newName}
        valueNumber={newNumber}
        onChangeName={handleNameInputChange}
        onChangeNumber={handleNumberInputChange}/>
      <Persons persons={persons} filter ={filter} onClick={handleDeletePress}/>
    </div>
  )
}

export default App
