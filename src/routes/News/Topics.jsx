export default function Topics({
	topics = ['Trending', 'Sport', 'Politics']
}) {
	return(
		<section className="flex gap-2">
			{topics.map((topic) => (
				<button
					className={`
						inline-grid place-items-center 
						rounded-full px-3 py-1
						${false ? 'bg-orange-400 dark:bg-purple-700' 
							: 'border-2 border-orange-400 dark:border-purple-700'
						}
					`}
				>
					{topic}
				</button>
			))}
		</section>
	)
}