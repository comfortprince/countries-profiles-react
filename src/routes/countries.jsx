import { useState, useEffect } from 'react'

import { getCountries, hasMore } from '../countries.js'

import CountriesSection from './sections/countries-section'
import FiltersSection from './sections/filters-section'

export default function Countries() {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const startIndex = 0
		let limit = 0

		setIsLoading(true)
		limit += 12

		getCountries(startIndex, limit)
		.then((countries) => {
			setIsLoading(false)
			setCountries(countries)
			console.log(countries)
		})
		.catch((error) => {
			setIsLoading(false)
			console.log(error.message)
		})

		const handleScroll = function () {
			const documentHeight = document.body.scrollHeight
			const windowHeight = document.documentElement.clientHeight
			const scrollOffset = window.pageYOffset

			if(documentHeight === windowHeight + scrollOffset && hasMore(limit)) {
				limit += 12
				console.log(limit)
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
	}, [])

	return (
		<>
			<FiltersSection/>
			<CountriesSection countries={countries}/>

			{isLoading && 
				<div>
					Loading
				</div>
			}
		</>
	)
}