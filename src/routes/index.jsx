import heroImage from '../assets/img/desktop-hero-image.jpeg'
import { features } from '../constants'

export default function Index() {
	return (
		<>
			<section className="py-6">
				
			</section>
			<section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				{features.map((feature) => (
					<article key={feature.content} className="bg-white dark:bg-dark-blue p-4 rounded">
						<h2 className="text-lg font-semibold pb-2">{feature.heading}</h2>
						<p>
							{feature.content}
						</p>
					</article>
				))}
			</section>
		</>
	)
}