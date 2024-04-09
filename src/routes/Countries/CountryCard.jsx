import { Link } from 'react-router-dom'

import { useInView } from 'react-intersection-observer'

export default function CountryCard({country}) {
	const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px'
  })

  return (
		<Link 
      ref={ref}
	    className={`
	    	shadow 
	    	flex flex-col justify-between 
	    	bg-white dark:bg-dark-blue
        hover:scale-105 transition-all duration-300 hover:shadow-lg
	     ${inView ? 'opacity-1' : 'opacity-0'}
      `}
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

        <div>
          <span className="font-semibold">
            Population:&nbsp;
          </span> 
          {country.population.toLocaleString()}
        </div>

        <div>
          <span className="font-semibold">
            Region:&nbsp; 
          </span>
          {country.region}
        </div>

        <div>
          <span className="font-semibold">
            Capital:&nbsp;
          </span>
          {country.capital}
        </div>
      </div>
    </Link>
	)
}