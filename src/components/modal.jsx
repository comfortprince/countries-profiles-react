export default function Modal({modalState, heading, items, handleWrapperClick}) {
	const VISIBLE = true
	const HIDDEN = false

	return (
		<>
			<div 
	    	className="
	    		absolute right-0 
	    		w-60 px-6 py-2 rounded shadow-lg shadow-black
	    		bg-white dark:bg-dark-blue z-10
	    	"
	    	style={{
	    		display: modalState === HIDDEN ? "none" : "block" 
	    	}}
	    >
				<ul className="grid gap-1">
					<li className="font-semibold">{heading}</li>
					{
						items.map((item)=>(
							<li key={item}>{item}</li>
						))
					}
				</ul>
			</div>
			<div 
				className="top-0 left-0 w-full h-full fixed" 
				onClick={() => {handleWrapperClick(HIDDEN)}}
				style={{
	    		display: modalState === HIDDEN ? "none" : "block" 
	    	}}
			></div>
		</>
	)
}