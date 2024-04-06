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
				bg-orange-300 dark:bg-purple-900
			`}
		>
			{children}
		</Link>
	)
}