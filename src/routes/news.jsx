import { Form } from 'react-router-dom'

export default function News() {
	return(
		<>
			<section>
				<div
	        role="search"
	        className="
	        	bg-white dark:bg-dark-blue 
	        	w-full md:w-96 pl-6 h-12 rounded 
	        	flex gap-4 items-center 
	        	shadow
	        "
			  >
		    	<i className="fas fa-search text-inherit text-sm"></i>
		      <Form
		      	className="w-full h-full"
		      >
		      	<input
		          role="searchbox"
		          className="
		          	placeholder:text-inherit bg-inherit dark:bg-inherit focus:bg-inherit outline-none
		          	placeholder:text-sm h-full w-full rounded" 
		          type="text"
		          name="q" 
		          placeholder="Search News..."
		        />
		      </Form>  
			  </div>
			</section>
			<section>
				Filters
			</section>
			<section>
				Topics
			</section>
			<section>
				News Cards
			</section>
		</>
	)
}