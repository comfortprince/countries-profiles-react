import { Form } from 'react-router-dom'

import { filterOptions } from '../../constants.js'

import Select from '../../components/select-dropdown'

export default function FiltersSection() {
	return (
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
	)
}