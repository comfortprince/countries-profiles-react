import Rating from './Rating'

export default function Comment({className, comment, rating}) {
	return(
		<div className={`${className} grid gap-3`}>
			<div className="overflow-hidden text-ellipsis">
				{comment}
			</div>
			<Rating rating={rating}/>
		</div>
	)
}