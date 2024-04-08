import { useState, useEffect } from 'react'

import Loading from '../components/Loading'

import CountriesSection from './CountriesSection'
import FiltersSection from './FiltersSection'

import { getAllCountries } from '../api/Countries'

export default function CountriesContainer({
	countries, 
	isLoading,
	filterText,
	regionFilterText,
	onFilterTextChange,
	onRegionFilterTextChange
}) {
	const [filteredCountries, setFilteredCountries] = useState([])

	useEffect(() => {
		console.log('Re rendered')

		if(filterText || regionFilterText){
			getAllCountries()
			.then((countries) => {
				setFilteredCountries(countries.filter((country) => {
					return country.commonName.toLowerCase().includes(filterText.toLowerCase()) 
						&& country.region.toLowerCase().includes(regionFilterText.toLowerCase())
				}))
			})
			.catch((error) => {
				console.log(error.message)
			})
		} else {
			setFilteredCountries(countries)
		}
	}, [filterText, regionFilterText, countries])

	return (
		<>
			<FiltersSection 
				filterText={filterText} 
				regionFilterText={regionFilterText}
				onFilterTextChange={onFilterTextChange}
				onRegionFilterTextChange={onRegionFilterTextChange}
			/>
			<CountriesSection countries={filteredCountries}/>

			{isLoading && <Loading/>}
		</>
	)
}