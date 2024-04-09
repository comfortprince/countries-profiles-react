import { Form } from 'react-router-dom'

import Topics from './Topics'
import NewsCards from './NewsCards'
import Search from '../components/Search'

export default function News() {
	return(
		<div className="max-sm:px-4 px-20">
			<section className="my-4">
				<Search 
					searchVal={''} 
					setSearchVal={()=>{}} 
					name='q' 
					placeholder='Search News...'
				/>
			</section>

			<section>
				<ul className="flex items-center gap-4 pb-4">
					<li className="flex gap-2">
						<input name="global-news" type="radio" onClick={(e)=>{console.log(e.target.value = 'off')}}/>
						<label htmlFor="global-news">Global News</label>
					</li>
					<li className="flex gap-2">
						<input name="local-news" type="radio" onClick={(e)=>{console.log(e.target.value = 'off')}}/>
						<label htmlFor="local-news">Local News</label>
					</li>
				</ul>
			</section>
			<Topics/>
			<NewsCards/>
		</div>
	)
}