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
				<div class="text-sm md:text-2xl font-bold">
			      Where in the world?
			    </div>
			    <button id="dark-mode-toggler" class="max-md:text-sm font-medium flex items-center gap-2">
			      <span>
			        <i class="fas fa-moon -rotate-6"></i>
			      </span>
			      <span>
			        Dark mode
			      </span>
			    </button>
			</header>
			<main>
				Main				
			</main>
		</>
	)
}