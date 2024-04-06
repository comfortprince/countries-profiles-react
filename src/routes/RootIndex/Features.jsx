import ButtonLink from '../components/ButtonLink'

import { features } from '../../constants'

export default function Features() {
	return (
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
					<ButtonLink className="w-full" to={feature.path}>
						Explore
					</ButtonLink>
				</article>
			))}
		</section>
	)
}