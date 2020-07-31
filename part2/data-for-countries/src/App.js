import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
	const [countries, setCountries] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data)
			})
	}, [])

	const displayCountries = [...countries]

	let display = countries.map((country) => (country.name))

	const handleChange = (event) => {
		setSearch(event.target.value)
	}


	if (display.length > 10) {
		display = 'Too many matches, please narrow down'
	} else if (display.length === 1) {
	} else {
		display = 'jdkfdksdfkefiwesd'
	}

	return (
		<div>
			<div className='countrySearch'>
				Search for Countries: <input
					onChange={handleChange}
					value={search}
				/>
			</div>
			<div className='countryList'>
				<p>{display}</p>
			</div>
		</div>
	)
}

export default App
