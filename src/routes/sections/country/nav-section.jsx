import {useNavigate} from 'react-router-dom'

export default function NavSection() {
	const navigate = useNavigate()
	
	return(
		<>
			<section class="px-4 md:px-20 flex justify-between">
	      <button 
	      	class="
	      		bg-white dark:bg-dark-blue 
	      		inline-flex items-center justify-center gap-3 
	      		px-8 py-2 text-sm rounded shadow"
	      	onClick={() => { navigate(-1) }}	
	      >
	        <i class="fa-solid fa-arrow-left"></i>
	        <span>
	          Back
	        </span>
	      </button>
	      <button 
	      	class="
	      		bg-white dark:bg-dark-blue 
	      		inline-flex items-center justify-center gap-3 
	      		px-8 py-2 text-sm rounded shadow"
	      	onClick={() => { navigate(1) }}	
	      >
	        <span>
	          Forward
	        </span>
	        <i class="fa-solid fa-arrow-right"></i>
	      </button>
	    </section>
		</>
	)
}