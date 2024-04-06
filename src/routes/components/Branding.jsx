import { Link } from 'react-router-dom'

export default function Branding() {
	return (
		<Link 
			className="text-sm md:text-2xl font-bold" 
			to={"/"}
		>
    	Where in the world?
    </Link>
	)
}