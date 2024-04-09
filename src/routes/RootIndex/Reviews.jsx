import { getReviews } from '../api/Reviews'

import Review from './Review'

export default function Reviews() {
	const reviews = getReviews()

	return(
		<section className="mt-4">
			<h2 className="my-6 text-4xl text-center font-semibold">
				Reviews
			</h2>
			<div className="grid md:grid-cols-2 gap-6">
				{reviews.slice(0, 4).map((review) => (
					<Review
						className={`
							lg:px-20
						`}
						key={review.id} 
						review={review}
					/>
				))}
			</div>
		</section>
	)
}