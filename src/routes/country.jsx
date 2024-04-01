import {useLoaderData} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

import { 
	getCountry,
	getCountriesByCodes
} from '../countries.js'

import Modal from '../components/modal'

import NavSection from './sections/country/nav-section'

export default function Country() {
	const country = useLoaderData()
	const nativeNames = getNativeNames(country)
	const languages = getLanguages(country)

	return (
		<>
		{/*Country Navigation Section*/}
    <NavSection/>
		<section
			className=" 
				flex flex-col md:flex-row md:justify-between md:items-center gap-12 mt-4
			"
		>
			<div className="md:w-1/2">
		    <img 
		      className="w-full h-auto rounded-t" 
		      src={country.imgUrl} 
		      alt={country.imgAlt}
		    />
		  </div>

		  <div className="md:w-1/2">
		    <div className="flex flex-col gap-8">
		      <h2 className="text-2xl font-semibold">
		        {country.commonName}
		      </h2>

		      <div className="flex flex-col max-md:gap-8 gap-4 lg:flex-row lg:justify-between">
		        <div className="flex flex-col gap-1 lg:w-1/2">
		          <div className="flex relative">
		            <span className="font-semibold pr-1">
		              Native&nbsp;Name: 
		            </span>
		            <MultipleDataValues  
		            	heading={"Native Items"} 
		            	items={nativeNames}
		            />
		          </div>
		          <div>
		            <span className="font-semibold pr-1">
		              Population: 
		            </span>
		            <span>
		              {country.population.toLocaleString()}
		            </span>
		          </div>
		          <div>
		            <span className="font-semibold pr-1">
		              Region: 
		            </span>
		            <span>
		              {country.region}
		            </span>
		          </div>
		          <div>
		            <span className="font-semibold pr-1">
		              Sub Region: 
		            </span>
		            <span>
		              {country.subregion}
		            </span>
		          </div>
		          <div className="flex relative">
		            <span className="font-semibold pr-1">
		              Capital: 
		            </span>
		            <MultipleDataValues  
		            	heading={"Capital Cities"} 
		            	items={country.capital}
		            />
		          </div>
		        </div>
		        <div className="flex flex-col gap-1 lg:w-1/2">
		          <div>
		            <span className="font-semibold pr-1">
		              Top Level Domain: 
		            </span>
		            <span>
		              {country.topLevelDomain}
		            </span>
		          </div>
		          <div>
		            <span className="font-semibold pr-1">
		              Currencies: 
		            </span>
		            {Object.keys(country.currencies).map((key) => (
	              	<span>
	                  {key}
	                </span>
	              ))}
		          </div>
		          <div className="flex relative">
		            <span className="font-semibold pr-1">
		              Languages: 
		            </span>
		            <MultipleDataValues  
		            	heading={"Languages"} 
		            	items={languages}
		            />
		          </div>
		        </div>
		      </div>
		      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
		        <div className="text-lg font-semibold pr-1">
		          Border Countries:
		        </div>
		        <div className="flex flex-wrap gap-2">
		          {country.borderCountries.map((country) => (
		          	<a
		          		href={`/countries/${country}`} 
		          		className="
		          			inline-block 
		          			bg-white dark:bg-dark-blue 
		          			py-2 px-8
		          			shadow font-light
		          			rounded
		          		"
		          	>
                  {country}
                </a>
		          ))}
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
		</>
	)
}

function MultipleDataValues({heading, items}) {
	const VISIBLE = true
	const HIDDEN = false
	const [spanIsOverflown, setSpanIsOverflown] = useState(false)
	const [modalState, setModalState] = useState(HIDDEN)
	const valuesSpanRef = useRef(null)

	useEffect(()=>{
		setSpanIsOverflown(valuesSpanRef.current.scrollWidth > valuesSpanRef.current.clientWidth)
	}, [])

	return (
		<>
			<span ref={valuesSpanRef} className="truncate">
    		{items.map((item, ndx, items) => {
    			return item + (items.length - 1 !== ndx ? ', ' : '')
    		})}
    	</span>

      <button 
      	className="absolute right-0" 
      	onClick={() => {setModalState(VISIBLE)}}
      	style={{
      		display: spanIsOverflown ? 'inline' : 'none'
      	}}
      >
      	<span className="invisible">cc</span>
      </button>

      <Modal 
      	modalState = {modalState}
      	handleWrapperClick = {() => {setModalState(HIDDEN)}}
      	heading = {heading}
      	items = {items}
      />
		</>
	)
}

function getNativeNames(country) {
	const nativeNames = country.nativeName
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

function getLanguages(country) {
	return Object.keys(country.languages).map((key) => (country.languages[key]))
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