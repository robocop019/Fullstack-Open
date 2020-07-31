import React from 'react'

const Person = ({ person, destroyPerson }) => {
	return (
		<div>
			<p>
				{person.name} {person.number}
				<button onClick={destroyPerson}>Delete</button>
			</p> 
		</div>
	)
}

export default Person