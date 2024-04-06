import { Outlet } from 'react-router-dom'

import Branding from '../components/Branding'
import ThemeToggler from '../components/ThemeToggler'

export default function Root() {
	return (
		<>
			<header 
				className="
					max-sm:px-4 px-20 max-sm:py-4 py-5 
					flex flex-row justify-between items-center 
					bg-white text-very-dark-blue-light-mode dark:bg-dark-blue dark:text-white
					shadow relative
				"
			>
	      <Branding/>
		    <ThemeToggler/>
			</header>
			<main
				className="
					max-sm:px-4 px-20 max-sm:py-4 py-5
					bg-very-light-gray dark:bg-very-dark-blue-dark-mode text-very-dark-blue-light-mode dark:text-white 
					min-h-screen
				"
			>
				<Outlet/>			
			</main>
		</>
	)
}