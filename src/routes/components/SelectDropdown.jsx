import { useState } from 'react'

export default function SelectDropdown({ 
	options,
	selectedOption,
	setSelectedOption
}) {
	const [isOpen, setIsOpen] = useState(false)

	return(
		<div className="w-3/5 md:w-52 h-12 relative">
			<button
				className="
					bg-white dark:bg-dark-blue 
					px-6 h-full w-full text-sm rounded 
					inline-flex items-center justify-between
					shadow
				"
				onClick={() => {
					setIsOpen(!isOpen)
				}}
			>
				<span>
					{selectedOption ? selectedOption : 'Filter by Region'} 
				</span>
				<span>
					<i className="fa-solid fa-angle-down"></i>
				</span>
			</button>
			
			{ isOpen && 
				<div className="bg-white dark:bg-dark-blue rounded shadow absolute w-full mt-1 overflow-hidden">
					{
						options.map((option, ndx) => (
							<div 
								key={option}
								className={`
									${ndx === 0 ? 'py-2' : 'py-1'} px-6 
									hover:bg-very-light-gray dark:hover:bg-very-dark-blue-dark-mode
								`}
								onClick={() => {
									setIsOpen(false)
									option.toLowerCase().trim() 
										=== String('Filter by Region').toLowerCase().trim() 
										? setSelectedOption('')
										: setSelectedOption(option)
								}}
							>
								{option}
							</div>
						))
					}
				</div>
			}
		</div>
	)
}