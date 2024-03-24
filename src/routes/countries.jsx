import { filterOptions } from '../constants.js'

import Select from '../components/select-dropdown'

export default function Countries() {
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
					grid md:grid-cols-3 lg:grid-cols-4 gap-12
				"
			>
				<Country country={{
					imgUrl: "",
					imgAlt: "country.flags.alt",
					commonName: "Zimbabwe",
					population: "1000000",
					region: "Africa",
					capital: "Harare"
				}}/>

				<Country country={{
					imgUrl: "",
					imgAlt: "country.flags.alt",
					commonName: "Zimbabwe",
					population: "1000000",
					region: "Africa",
					capital: "Harare"
				}}/>

				<Country country={{
					imgUrl: "",
					imgAlt: "country.flags.alt",
					commonName: "Zimbabwe",
					population: "1000000",
					region: "Africa",
					capital: "Harare"
				}}/>

				<Country country={{
					imgUrl: "",
					imgAlt: "country.flags.alt",
					commonName: "Zimbabwe",
					population: "1000000",
					region: "Africa",
					capital: "Harare"
				}}/>
			</section>
		</>
	)
}

function Country({country}) {
	return (
		<a 
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
    </a>
	)
}