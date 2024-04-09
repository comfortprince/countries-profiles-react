import { useInView } from 'react-intersection-observer'

import ButtonLink from '../components/ButtonLink'

import { heroImage } from '../../constants'

export default function Hero() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '0px 0px'
	})

	return(
		<section
			ref={ref}
			className={`
				flex flex-col-reverse max-md:items-center max-md:gap-4 md:flex-row justify-between
				py-6 lg:px-20
				transition-opacity duration-700
				${inView ? 'opacity-1' : 'opacity-0'}
			`}
		>
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
				<ButtonLink className="w-52 font-semibold" to={"countries"}>
					Browse Countries
				</ButtonLink>
			</div>
			<img 
				className="h-[25rem] w-[25rem] rounded-full lg:bsolute top-0 right-32"
				alt="A man with a backpack hiking in the mountains"
				src={heroImage}
			/>
		</section>
	)
}