import { Outlet, Link } from 'react-router-dom'

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
			      <Link to={"/"}>
			      	Where in the world?
			      </Link>
			    </div>
			    <ThemeToggler/>
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

function ThemeToggler() {
	const htmlEl = document.documentElement
	const DARK_THEME = 'dark'
	const LIGHT_THEME = 'light'

	if('preferedTheme' in localStorage){
		htmlEl.classList = localStorage.getItem('preferedTheme')
	}else{
		htmlEl.classList = LIGHT_THEME
		localStorage.setItem('preferedTheme', LIGHT_THEME)
	}

	function toggleTheme() {
		const CURRENT_THEME = htmlEl.classList[0]
		htmlEl.classList = CURRENT_THEME === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
		localStorage.setItem('preferedTheme', htmlEl.classList[0])
	}

	return(
		<>
			<button onClick={toggleTheme} className="max-md:text-sm font-medium flex items-center gap-2">
	      <span>
	        <i className="fas fa-moon -rotate-6"></i>
	      </span>
	      <span>
	        Dark mode
	      </span>
	    </button>
		</>
	)
}