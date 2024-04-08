import Comment from './Comment'
import AuthorInfo from './AuthorInfo'

export default function Review({review, className}) {
	return(
		<article 
			className={`${className} flex flex-col justify-between gap-2`}
		>
			<Comment
				className="bg-white dark:bg-dark-blue p-4 rounded" 
				comment={review.comment} 
				rating={review.rating}
			/>
			<AuthorInfo username={review.username}/>
		</article>
	)
}