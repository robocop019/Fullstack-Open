import React, { useState } from 'react'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
// import Filter from './components/Filter'

const App = () => {
	const [persons, setPersons] = useState(
		[
			{ name: 'Arto Hellas', number: '040-123456' },
			{ name: 'Ada Lovelace', number: '39-44-5323523' },
			{ name: 'Dan Abramov', number: '12-43-234345' },
			{ name: 'Mary Poppendieck', number: '39-23-6423122' }
		]
	)
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	// const [filter, setFilter] = useState('')
	// const [filteredPeople, setFilteredPeople] = useState([...persons])

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
