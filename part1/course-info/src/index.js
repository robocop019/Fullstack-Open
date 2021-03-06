import React from "react"
import ReactDOM from "react-dom"

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
	return (
		<div>
			<Part part={parts[0]} />
			<Part part={parts[1]} />
			<Part part={parts[2]} />
		</div>
	)
}

const Part = ({ part }) => {
	return (
		<div>
			<p>
				{" "}
				{part.name} {part.exercises}{" "}
			</p>
		</div>
	)
}

const Total = ({ parts }) => {
	const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
	return <p>Number of exercises: {total}</p>
}

const App = () => {
	const course = {
		name: "Half Stack Application Development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	}

	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
