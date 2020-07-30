import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	useEffect(() => {
		axios
			.get('http://localhost:3001/persons')
			.then(response => {
				setPersons(response.data)
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
			
			setPersons(persons.concat(newPersonObject))
			setNewName('')
			setNewNumber('')
		}
	}

	return (
		<div>
			<h1>Phonebook</h1>

			<h3>Add a New Person</h3>

			<PersonForm
				handleSubmit={handleSubmit}
				handleNameChange={handleNameChange}
				newName={newName}
				handleNumberChange={handleNumberChange}
				newNumber={newNumber}
			/>

			<h2>Numbers</h2>

			<Persons persons={persons} />
		</div>
	)
}
export default App
