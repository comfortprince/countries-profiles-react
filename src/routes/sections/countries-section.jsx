import { Link } from 'react-router-dom'

export default function Countries ({countries}) {
	return (
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
		</section>
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
	    to={`${country.commonName}`}
  	>
      <img 
        className="min-w-full h-40 rounded-t overflow-y-scroll" 
        src={country.imgUrl} 
        alt={country.imgAlt}
        loading="lazy"
      />

      <div className="bg-white dark:bg-dark-blue px-6 py-6 rounded-b">
        <h2 className="text-lg font-bold mb-4">
          {country.commonName}
        </h2>

        <p>
          <span className="font-semibold">
            Population:&nbsp;
          </span> 
          {country.population.toLocaleString()}
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