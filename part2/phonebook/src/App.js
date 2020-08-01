import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [notificationMessage, setNotificationMessage] = useState(null)

	useEffect(() => {
		personService
			.getAll()
			.then(initialPersons => {
				setPersons(initialPersons)
			})
	}, [])

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const names = persons.map((person) => (person.name).toLowerCase())

		if (names.includes(newName.toLowerCase())) {
			alert(`${newName} is already in the phonebook!`);
		} else {
			const newPersonObject = {
				name: newName,
				number: newNumber
			}

			personService
				.create(newPersonObject)
				.then(returnedPerson => {
					setPersons((persons).concat(returnedPerson))
					setNotificationMessage(`Added ${returnedPerson.name}`)
					setTimeout(() => {
						setNotificationMessage(null)
					}, 5000)
					setNewName('')
					setNewNumber('')
				})
		}
	}

	const destroyPerson = (id) => {
		const result = window.confirm('Do you wish to do this person?')

		if (result) {
			personService
				.destroy(id)
				.then(response => {
					setPersons(persons.filter(p => p.id !== id))
				})
				.catch(error => {
					alert('Could not delete from server')
				})
		}
	}


	return (
		<div>
			<h1>Phonebook</h1>

			<Notification message={notificationMessage} />

			<h3>Add a New Person</h3>

			<PersonForm
				handleSubmit={handleSubmit}
				handleNameChange={handleNameChange}
				newName={newName}
				handleNumberChange={handleNumberChange}
				newNumber={newNumber}
			/>

			<h2>Numbers</h2>

			{persons.map((person) => (
				<Person
					key={person.id}
					person={person}
					destroyPerson={() => destroyPerson(person.id)}
				/>
			))}

		</div>
	)
}
export default App
