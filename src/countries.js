async function getCountries(startIndex, limit) {
	let countries = []

	if(!("countries" in localStorage)) {
		const response = await fetch('https://restcountries.com/v3.1/all')

		if(!response.ok)
			throw new Error(response.status)

		countries = await response.json()
		localStorage.setItem('countries', JSON.stringify(countries))
	} else {
		countries = JSON.parse(localStorage.getItem('countries'))
	}

	if(!(startIndex || limit)){
		return countries;
	}else {
		return countries.slice(startIndex, limit).map((country) => {
			return {
				// imgUrl: country.flags.png,
				imgUrl: '#',
				imgAlt: country.flags.alt,
				commonName: country.name.common,
				population: country.population,
				region: country.region,
				capital: country.capital
			}
		});
	}
}

export { getCountries }

async function getCountry(commonName) {
	let countries = []

	try {
		countries = await getCountries()
		for (let i = 0; i < countries.length; i++) {
			if(countries[i].name.common === commonName)
				return countries[i]
		}
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}

export { getCountry }

async function getCountriesByCodes(cca3s) {
	let countries = []
	const data = []

	try {
		countries = await getCountries()
		for (let i = 0; i < countries.length; i++) {
			if(('cca3' in countries[i]) && cca3s.includes(countries[i].cca3))
				data.push(countries[i])
		}
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}

	return data
}

export { getCountriesByCodes }

/*
* checks if there are more countries available beyond the current limit
* @returns {boolean} true if there are more countries, false otherwise
*/
async function hasMore(limit) {
	const numOfCountries = (await getCountries()).length
	return limit < numOfCountries 
}

export { hasMore }