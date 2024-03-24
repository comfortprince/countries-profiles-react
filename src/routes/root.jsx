import { Outlet } from 'react-router-dom'

export default function Root() {
	return (
		<>
			<header 
				className="
					max-sm:px-4 px-20 max-sm:py-4 py-5 
					flex flex-row justify-between items-center 
					bg-white text-very-dark-blue-light-mode dark:bg-dark-blue dark:text-white
					shadow
				"
			>
				<div className="text-sm md:text-2xl font-bold">
			      Where in the world?
			    </div>
			    <button id="dark-mode-toggler" className="max-md:text-sm font-medium flex items-center gap-2">
			      <span>
			        <i className="fas fa-moon -rotate-6"></i>
			      </span>
			      <span>
			        Dark mode
			      </span>
			    </button>
			</header>
			<main
				className="
					max-sm:px-4 px-20 max-sm:py-4 py-5
					bg-very-light-gray dark:bg-very-dark-blue-dark-mode text-very-dark-blue-light-mode dark:text-white min-h-screen
				"
			>
				<Outlet/>				
			</main>
		</>
	)
}