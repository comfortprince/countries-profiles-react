import { useState, useEffect } from 'react'

import { getCountries, hasMore } from '../api/Countries'

import CountriesContainer from './CountriesContainer'

const LOAD_MORE_HEIGHT = 100
const PAGE_SIZE = 12

/*
* Responsible for holding state
*/
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

			if(windowHeight + scrollOffset > documentHeight - LOAD_MORE_HEIGHT
				&& hasMore(limit)
				&& !(filterText || regionFilterText)
			) {
				limit += PAGE_SIZE
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
		<CountriesContainer 
			countries={countries} 
			isLoading={isLoading}
			filterText={filterText} 
			regionFilterText={regionFilterText}
			onFilterTextChange={setFilterText}
			onRegionFilterTextChange={setRegionFilterText}
		/>
	)
}