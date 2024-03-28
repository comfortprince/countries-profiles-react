import { useState, useEffect } from 'react'

import { getCountries, hasMore } from '../countries.js'

import CountriesSection from './sections/countries-section'
import FiltersSection from './sections/filters-section'

export default function Countries() {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [filterText, setFilterText] = useState("")
	const [regionFilterText, setRegionFilterText] = useState("")

	useEffect(() => {
		const startIndex = 0
		let limit = 0

		setIsLoading(true)
		limit += 12

		getCountries(startIndex, limit)
		.then((countries) => {
			setIsLoading(false)
			setCountries(countries)
		})
		.catch((error) => {
			setIsLoading(false)
			console.log(error.message)
		})

		const handleScroll = function () {
			const documentHeight = document.body.scrollHeight
			const windowHeight = document.documentElement.clientHeight
			const scrollOffset = window.pageYOffset

			console.log(filterText)

			if(windowHeight + scrollOffset > documentHeight - 100  
				&& hasMore(limit)
				&& !(filterText || regionFilterText)
			) {
				limit += 12
				setIsLoading(true)

				getCountries(startIndex, limit)
				.then((countries) => {
					setIsLoading(false)
					setCountries(countries)
				})
				.catch((error) => {
					setIsLoading(false)
					console.log(error.message)
				})
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [filterText, regionFilterText])

	return (
		<MainContainer 
			countries={countries} 
			isLoading={isLoading}
			filterText={filterText} 
			regionFilterText={regionFilterText}
			onFilterTextChange={setFilterText}
			onRegionFilterTextChange={setRegionFilterText}
		/>
	)
}

function MainContainer({
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
			getCountries(0, 300)
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

			{isLoading && 
				<div>
					Loading
				</div>
			}
		</>
	)
}