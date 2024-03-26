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

	return countries.slice(startIndex, limit).map((country) => {
		return {
			imgUrl: country.flags.png,
			imgAlt: country.flags.alt,
			commonName: country.name.common,
			population: country.population,
			region: country.region,
			capital: country.capital
		}
	});
}

export { getCountries }