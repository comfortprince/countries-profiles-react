import Root from './Root'
import RootIndex from './RootIndex'
import Countries from './Countries/'
import Country, { loader as countryLoader } from './Country'
// import News from './news'

const routes = [
	{
		path: '/',
		element: <Root/>,
		children: [
			{
				index: true,
				element: <RootIndex/>
			},
			{
				path: 'countries',
				element: <Countries/>
			},
			{
				path: 'countries/:commonName',
				loader: countryLoader,
				element: <Country/>
			},
			// {
			// 	path: 'news',
			// 	element: <News/>
			// }
		]
	}
]

export default routes