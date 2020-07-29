import React from 'react'

const Total = ({ course }) => {
	const exercises = course.parts.map((part) => (
		part.exercises
	))

	const total = exercises.reduce((a, b) => a + b, 0)

	return <p>Total number of exercises: {total}</p>
}

export default Total