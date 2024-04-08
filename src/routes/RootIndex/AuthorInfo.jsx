export default function AuthorInfo({username}) {
	return(
		<div className="flex justify-start items-center gap-3 pl-2">
			<span className="
				bg-orange-300 dark:bg-purple-900 
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