export default function Rating({rating}) {
	const POSSIBLE_RATINGS = [1, 2, 3, 4, 5]

	return(
		<div className="flex gap-3">
			{POSSIBLE_RATINGS.map((num) => (
				<span
					key={num} 
					className={`
						inline-grid place-items-center 
						rounded-full w-8 h-8
						${num <= rating ? 'bg-orange-300 dark:bg-purple-900' 
							: 'border-2 border-orange-300 dark:border-purple-900'
						}
					`}
				>
					{num}
				</span>
			))}
		</div>
	)
}