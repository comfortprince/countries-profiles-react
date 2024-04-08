import Hero from './Hero'
import Features from './Features'
import Reviews from './Reviews'
import TrustIndicators from './TrustIndicators'

export default function RootIndex() {
	return (
		<>
			<div className="max-sm:px-4 px-20">
				<Hero/>
			</div>

			<TrustIndicators/>
			
			<div className="max-sm:px-4 px-20">
				<Features/>
				<Reviews/>
			</div>
		</>
	)
}