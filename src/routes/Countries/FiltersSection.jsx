import { regionFilterOptions } from '../../constants'

import SelectDropdown from '../components/SelectDropdown'
import Search from '../components/Search'

export default function FiltersSection({
	filterText, 
	regionFilterText, 
	onFilterTextChange, 
	onRegionFilterTextChange
}) {

	return (
		<section
			className="
				flex flex-col md:flex-row max-md:gap-8 justify-between
			"
		>
			<Search 
				searchVal={filterText} 
				setSearchVal={onFilterTextChange}
				placeholder={"Search a country..."}
			/>
		  <SelectDropdown 
	  		options={regionFilterOptions} 
	  		selectedOption={regionFilterText}
	  		setSelectedOption={onRegionFilterTextChange}
	  	/>
		</section>
	)
}