export default function Search({searchVal, setSearchVal, name, placeholder}) {
	return(
		<div
      role="search"
      className="
      	bg-white dark:bg-dark-blue 
      	h-12 md:w-96 pl-6 rounded 
      	flex gap-4 items-center 
      	shadow
      "
	  >
    	<i className="fas fa-search text-inherit text-sm"></i>
    	<input
        role="searchbox"
        className="
        	placeholder:text-inherit bg-inherit dark:bg-inherit focus:bg-inherit outline-none
        	placeholder:text-sm h-full w-full rounded" 
        type="text"
        name={name} 
        placeholder={placeholder}
        value={searchVal}
        onChange={(e) => {setSearchVal(e.target.value)}}
      />
    </div>
	)
}