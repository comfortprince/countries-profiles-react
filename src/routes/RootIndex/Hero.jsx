import ButtonLink from '../components/ButtonLink'

import { heroImage } from '../../constants'

export default function Hero() {
	return(
		<section className="py-6">
			<div className="flex flex-col-reverse max-md:items-center max-md:gap-4 md:flex-row lg:px-20 justify-between relative">
				<div className="
					md:h-[25rem] 
					flex flex-col justify-center max-md:items-center 
					gap-4 max-md:text-center"
				>
					<h1 className="text-5xl font-semibold">Discover the World!</h1>
					<p>
						Explore countries and their fascinating cultures, 
						<br className="max-md:hidden" /> 
						landscapes, and historical landmarks.
					</p>
					<ButtonLink className="w-52" to={"countries"}>
						Browse Countries
					</ButtonLink>
				</div>
				<img 
					className="h-[25rem] w-[25rem] rounded-full lg:bsolute top-0 right-32"
					alt="A man with a backpack hiking in the mountains"
					src={heroImage}
				/>
			</div>
		</section>
	)
}