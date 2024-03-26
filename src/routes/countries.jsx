import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { filterOptions } from '../constants.js'
import { getCountries } from '../countries.js'

import Select from '../components/select-dropdown'

export default function Countries() {
	const [countries, setCountries] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		let startIndex = 0, limit = 10
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

		const handleScroll = function () {
			const documentHeight = document.body.scrollHeight
			const windowHeight = document.documentElement.clientHeight
			const scrollOffset = window.pageYOffset

			if(documentHeight === windowHeight + scrollOffset) {
				limit += 10
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
			<section
				className="
					flex flex-col md:flex-row max-md:gap-8 justify-between
				"
			>
				<div
	        role="search"
	        className="
	        	bg-white dark:bg-dark-blue 
	        	w-full md:w-96 pl-6 h-12 rounded 
	        	flex gap-4 items-center 
	        	shadow
	        "
			  >
			    	<i className="fas fa-search text-inherit text-sm"></i>
			      <form
			      	className="w-full h-full"
			      >
			      	<input
			          role="searchbox"
			          className="
			          	placeholder:text-inherit bg-inherit dark:bg-inherit focus:bg-inherit outline-none
			          	placeholder:text-sm h-full w-full rounded" 
			          type="text"
			          name="q" 
			          placeholder="Search a country..."
			        />
			      </form>  
			  </div>
			  <div>
			  	<Select options={ filterOptions } />
			  </div>
			</section>
			<section
				className="
					max-md:px-6 mt-12
				"
			>
				<div
					className="
						grid md:grid-cols-3 lg:grid-cols-4 gap-12
					"
				>
					{countries.map((country, ndx) => (
						<Country key={ndx} country={country}/>
					))}
				</div>

				{isLoading && 
					<div>
						Loading
					</div>
				}
			</section>
		</>
	)
}

function Country({country}) {
	return (
		<Link 
	    className="
	    	shadow 
	    	flex flex-col justify-between 
	    	bg-white dark:bg-dark-blue
	    " 
	    href={`countries/${country.commonName}`}
  	>
      <img 
        className="min-w-full h-auto rounded-t" 
        src={country.imgUrl} 
        alt={country.imgAlt}
      />

      <div className="bg-white dark:bg-dark-blue px-6 py-6 rounded-b">
        <h2 className="text-lg font-bold mb-4">
          {country.commonName}
        </h2>

        <p>
          <span className="font-semibold">
            Population:&nbsp;
          </span> 
          {country.population}
        </p>

        <p>
          <span className="font-semibold">
            Region:&nbsp; 
          </span>
          {country.region}
        </p>

        <p>
          <span className="font-semibold">
            Capital:&nbsp;
          </span>
          {country.capital}
        </p>
      </div>
    </Link>
	)
}