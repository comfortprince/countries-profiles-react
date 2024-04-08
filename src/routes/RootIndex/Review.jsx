export default function Review({review, className}) {
	return(
		<article 
			className={`${className} flex flex-col gap-3`}
		>
			<Comment
				className="bg-white dark:bg-dark-blue p-4 rounded shadow-md" 
				comment={review.comment} 
				rating={review.rating}
			/>
			<AuthorInfo username={review.username}/>
		</article>
	)
}

function Comment({className, comment, rating}){
	return(
		<div className={`${className} grid gap-3`}>
			<div>
				{comment}
			</div>
			<Rating rating={rating}/>
		</div>
	)
}

function Rating({rating}) {
	const POSSIBLE_RATINGS = [1, 2, 3, 4, 5]

	return(
		<div className="flex gap-3">
			{POSSIBLE_RATINGS.map((num) => (
				<span
					key={num} 
					className={`
						inline-grid place-items-center 
						rounded-full w-8 h-8
						${num <= rating ? 'bg-orange-400 dark:bg-purple-700' 
							: 'border-2 border-orange-400 dark:border-purple-700'
						}
					`}
				>
					{num}
				</span>
			))}
		</div>
	)
}

function AuthorInfo({username}) {
	return(
		<div className="flex justify-start items-center gap-3 pl-2">
			<span className="
				bg-orange-400 dark:bg-purple-700 
				w-8 h-8 rounded-full 
				inline-grid place-items-center
			">
				{username[0]}
			</span>
			<span className="font-semibold">
				{username}
			</span>
		</div>
	)
}