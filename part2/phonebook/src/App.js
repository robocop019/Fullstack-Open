import React, { useState } from 'react'

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

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const names = persons.map((person) => (person.name))

		if (names.includes(newName)) {
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
			<h2>Phonebook</h2>

			<form onSubmit={handleSubmit}>
				<div>
					Name: <input
						onChange={handleNameChange}
						value={newName}
					/>
					<br />
					Phone Number:  <input
						onChange={handleNumberChange}
						value={newNumber}
					/>
				</div>
				<div>
					<br />
					<button type="submit">Add Person</button>
				</div>
			</form>

			<h2>Numbers</h2>
			<div>
				{persons.map((person) => (
					<p key={person.name}>{person.name} {person.number}</p>
				))}
			</div>
		</div>
	)
}
export default App
