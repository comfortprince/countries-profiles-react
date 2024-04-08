import { Link } from 'react-router-dom'

export default function ButtonLink({children, to, className}) {
	return(
		<Link 
			to={to}
			className={`
				${className}
				px-5 py-2 text-lg
				inline-grid place-items-center 
				rounded
				bg-orange-400 dark:bg-purple-700
			`}
		>
			{children}
		</Link>
	)
}