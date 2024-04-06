import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../components/Modal'

export default function CountryDetailsSection({country, nativeNames, languages}) {
	return (
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
		          	<Label label={`NativeNames`}/>
		            <Values  
		            	heading={"Native Names"} 
		            	items={country.nativeNames}
		            />
		          </div>
		          <div>
		         		<Label label={"Population"} />
		            <Values
		            	heading={"Population"}
		            	items={country.population}
		            />
		          </div>
		          <div>
		          	<Label label={"Region"} />
		            <Values
		            	heading={"Region"}
		            	items={country.region}
		            />
		          </div>
		          <div>
		          	<Label label={"Sub Region"} />
		            <Values
		            	heading={"SubRegion"}
		            	items={country.subregion}
		            />
		          </div>
		          <div className="flex relative">
		            <Label label={"Capital"} />
		            <Values
		            	heading={"Capital Cities"}
		            	items={country.capital}
		            />
		          </div>
		        </div>
		        <div className="flex flex-col gap-1 lg:w-1/2">
		          <div>
		            <Label label={"Top Level Domain"} />
		            <Values
		            	heading={"Top Level Domain"}
		            	items={country.topLevelDomain}
		            />
		          </div>
		          <div>
		            <Label label={"Currencies"} />
		            <Values
		            	heading={"Currencies"}
		            	items={country.currencies}
		            />
		          </div>
		          <div className="flex relative">
		            <Label label={"Languages"} />
		            <Values  
		            	heading={"Languages"} 
		            	items={country.languages}
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
		          	<Link
		          		to={`/countries/${country}`} 
		          		className="
		          			inline-block 
		          			bg-white dark:bg-dark-blue 
		          			py-2 px-8
		          			shadow font-light
		          			rounded
		          		"
		          	>
                  {country}
                </Link>
		          ))}
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

function Label({label}) {
	return (
		<span className="font-semibold pr-1">
      {`${label}:`} 
    </span>
	)
}

function Values({heading, items}) {
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
      	<span className="invisible">DD</span>
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