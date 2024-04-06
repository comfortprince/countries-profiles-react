export default function ThemeToggler() {
	const DARK_THEME = 'dark'
	const LIGHT_THEME = 'light'

	const htmlEl = document.documentElement

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
		<button 
			onClick={toggleTheme} 
			className="max-md:text-sm font-medium flex items-center gap-2"
		>
	    <span>
	      <i className="fas fa-moon -rotate-6"></i>
	    </span>
	    <span>
	      Dark mode
	    </span>
	  </button>
	)
}