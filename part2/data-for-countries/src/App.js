import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'
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

	const handleChange = (event) => {
		setSearch(event.target.value)
	}

	const displayCountries = countries.filter((country) => (country.name.toLowerCase().indexOf(search.toLowerCase()) > -1))

	console.log(displayCountries)

	return (
		<div>
			<div className='countrySearch'>
				Search for Countries: <input
					onChange={handleChange}
					value={search}
				/>
			</div>
			<Country countries={displayCountries} />
		</div>
	)
}

export default App
