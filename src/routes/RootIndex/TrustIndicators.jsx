import AIRBNB from '../../assets/trust indicator icons/airbnb.svg'
import AMAZON from '../../assets/trust indicator icons/amazon.svg'
import COCACOLA from '../../assets/trust indicator icons/cocacola.svg'
import MICROSOFT from '../../assets/trust indicator icons/microsoft.svg'
import PEPSI from '../../assets/trust indicator icons/pepsi.svg'
import UBER from '../../assets/trust indicator icons/uber.svg'

export default function TrustIndicators() {
	return(
	<>
		<section 
			className="
				flex max-md:flex-wrap justify-between max-md:justify-center items-center gap-4 
				px-6 md:px-20 py-4 my-4 
				bg-gray-100 dark:bg-gray-800
			">
				<img src={AIRBNB} className="w-10 h-10 text-red-400" />
				<img src={AMAZON} className="w-10 h-10 text-red-400" />
				<img src={COCACOLA} className="w-20 h-20 text-red-400" />
				<img src={MICROSOFT} className="w-10 h-10 text-red-400" />
				<img src={PEPSI} className="w-24 h-24 text-red-400" />
				<img src={UBER} className="w-20 h-20 text-red-400" />
		</section>
	</>
	)
}