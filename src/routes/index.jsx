import { Link } from 'react-router-dom'

import heroImage from '../assets/img/desktop-hero-image.jpeg'
import { features } from '../constants'

export default function Index() {
	return (
		<>
			<section className="py-6">
				<div className="flex flex-col-reverse max-md:gap-4 md:flex-row justify-between relative">
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
						<Link 
							className="
								px-5 py-2 w-52 text-lg
								inline-grid place-items-center 
								rounded
								bg-orange-300 dark:bg-purple-900
							" 
							to={"countries"}
						>
							Browse Countries
						</Link>
					</div>
					<img 
						className="h-[25rem] w-[25rem] rounded-full lg:absolute top-0 right-32"
						alt="A man with a backpack hiking in the mountains"
						src={heroImage}
					/>
				</div>
			</section>
			<section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				{features.map((feature) => (
					<article 
						key={feature.content} 
						className="bg-white dark:bg-dark-blue p-4 rounded flex flex-col justify-between gap-2"
					>
						<div className="flex flex-col items-center text-center">
							<img className="scale-125 my-6" src={feature.imgUrl} alt={feature.imgAlt}/>
							<h2 className="text-lg font-semibold pb-2">{feature.heading}</h2>
							<p>
								{feature.content}
							</p>
						</div>
						<Link 
							to={feature.path}
							className="
								px-5 py-2 w-full text-lg
								inline-grid place-items-center 
								rounded
								bg-orange-300 dark:bg-purple-900
							"
						>
							Explore
						</Link>
					</article>
				))}
			</section>
		</>
	)
}