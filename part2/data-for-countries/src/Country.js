import React from 'react'

const Country = ({ countries }) => {
	if (countries.length > 10) {
		return (
			<p>Too many results, please narrow search...</p>
		)
	} else if (countries.length > 1) {
		return (
			<div>
				{countries.map((country) => (
					<p key={country.name}>{country.name}</p>
				))}
			</div>
		)
	} else if (countries.length === 1) {
		const country = countries[0]
		return (
			<div>
				<p>Country: {country.name}</p>
				<p>Capital: {country.capital}</p>
				<p>Continent: {country.region}</p>
				<p>Population: {country.population}</p>
			</div>
		)
	}
	return (
		<p>No matches...</p>
	)
}

export default Country