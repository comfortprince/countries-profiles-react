import CountryCard from './CountryCard'

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
					<CountryCard key={ndx} country={country}/>
				))}
			</div>
		</section>
	)
}