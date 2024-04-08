import { Link } from 'react-router-dom'

import { getFeatures } from '../api/Features'

export default function Features() {
	const features = getFeatures()

	return (
		<section>
			<h2 className="my-6 text-4xl text-center font-semibold">
				Features
			</h2>
			<div className="grid md:grid-cols-2 gap-4">
				{features.map((feature) => (
					<article 
						key={feature.content} 
						className="lg:px-20"
					>
						<div className="shadow-md bg-white dark:bg-dark-blue p-4 rounded flex flex-col justify-between gap-2">
							<div className="flex flex-col items-center text-center">
								<img className="scale-110 my-4" src={feature.imgUrl} alt={feature.imgAlt}/>
								<h3 className="text-lg font-semibold pb-2">{feature.heading}</h3>
								<p>
									{feature.content}
								</p>
							</div>
							<Link 
								className="
									w-full flex items-center justify-center gap-3
									font-semibold text-lg 
									text-orange-400 dark:text-purple-700
								" 
								to={feature.path}
							>
								<span 
									className="inline-flex items-center" 
								>
									{feature.cta}
								</span>
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}