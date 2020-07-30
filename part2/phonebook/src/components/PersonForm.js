import React from 'react'

const PersonForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				Name: <input onChange={props.handleNameChange} value={props.newName} />
				<br />
				Phone Number: <input onChange={props.handleNumberChange} value={props.newNumber} />
				<br />
			</div>
			<div>
				<button type="submit">Add Person</button>
			</div>
		</form>
	)
}

export default PersonForm
