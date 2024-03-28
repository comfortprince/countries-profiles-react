import {useLoaderData} from 'react-router-dom'

import { 
	getCountry,
	getCountriesByCodes
} from '../countries.js'

export default function Country() {
	console.log(useLoaderData())

	return (
		<span>{"dsd"}</span>
	)
}

export async function loader({params}) {
	let countryName = params.commonName

	try {
		const country = await getCountry(countryName)
		return await extractCountryDetails(country)
	} catch(e) {
		console.log(e)
		throw new Error(e)
	}
}

async function extractCountryDetails(country) {
	const borderCountries = await getBorderCountries(country)

  let countryObj = {
    imgUrl: country.flags.png,
    imgAlt: country.flags.alt,
    commonName: country.name.common,
    nativeName: country.name.nativeName,    // Some countries have multiple native names
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    topLevelDomain: country.tld,
    currencies: country.currencies,         // Some countries have multiple currencies
    languages: country.languages,           // Some countries have Multiple languages
    borderCountries: borderCountries,       // Some countries have Multiple border countries
    capital: country.capital
  }

  return countryObj
}

async function getBorderCountries(country) {
	const borderCountries = []

	if('borders' in country){
		try {
		  const data = await getCountriesByCodes(country.borders)

	    data.forEach( function(country) {
	      borderCountries.push(country.name.common)
	    })
		} catch(e) {
			console.log(e)
			throw new Error(e)
		}
  }

  return borderCountries
}