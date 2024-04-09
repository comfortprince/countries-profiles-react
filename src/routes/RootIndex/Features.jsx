import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import { getFeatures } from '../api/Features'

export default function Features() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '300px 0px'
	})

	const features = getFeatures()

	return (
		<section>
			<h2 className="my-6 text-4xl text-center font-semibold">
				Features
			</h2>
			<div className="grid md:grid-cols-2 gap-4">
				{features.map((feature) => (
					<article 
						ref={ref}
						key={feature.content} 
						className={`
							lg:px-20 relative hover:scale-105 transition-all duration-300
							${inView ? 'opacity-1' : 'opacity-0'}
						`}
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
						<div className="bg-red-400 dark:bg-red-600 p-1 absolute top-0 rounded-tl">
							Coming Soon
						</div>
					</article>
				))}
			</div>
		</section>
	)
}