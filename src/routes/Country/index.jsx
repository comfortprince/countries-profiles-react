import { useLoaderData } from 'react-router-dom'

import { 
	getCountry,
	getCountriesByCodes
} from '../api/Countries'

import NavSection from './NavSection'
import CountryDetailsSection from './CountryDetailsSection'

export default function Country() {
	const country = useLoaderData()
	console.log("country")
	return (
		<>
	    <NavSection/>
			<CountryDetailsSection 
				country={country}
			/>
		</>
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
	const nativeNames = getNativeNames(country.name.nativeName)
	const languages = getLanguages(country.languages)
	const currencies = getCurrencies(country.currencies)

  let countryObj = {
    imgUrl: country.flags.png,
    imgAlt: country.flags.alt,
    commonName: country.name.common,
    nativeNames: nativeNames,    // Some countries have multiple native names
    population: [country.population.toLocaleString()],
    region: [country.region],
    subregion: [country.subregion],
    topLevelDomain: country.tld,
    currencies: currencies,         // Some countries have multiple currencies
    languages: languages,           // Some countries have Multiple languages
    borderCountries: borderCountries,       // Some countries have Multiple border countries
    capital: [country.capital]
  }

  return countryObj
}

function getCurrencies(currencies) {
	return Object.keys(currencies).map((key) => (
    key
  ))
}

function getNativeNames(nativeNames) {
  let lastNativeName = ""
  const nativeNameKeys = Object.keys(nativeNames)
  const uniqueNativeNamesKeys = nativeNameKeys.filter((key) => {
  	if(lastNativeName !== nativeNames[key].common){
  		lastNativeName = nativeNames[key].common
  		return true
  	}
  	return false
  })

  return uniqueNativeNamesKeys.map((key) => {
		return nativeNames[key].common
	})
}

function getLanguages(languages) {
	return Object.keys(languages).map((key) => (languages[key]))
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