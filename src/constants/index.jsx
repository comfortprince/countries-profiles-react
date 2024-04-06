import countryInfoIcon from '../assets/img/map.png'
import interactiveMapsIcon from '../assets/img/treasure-map.png'
import worldNewsIcon from '../assets/img/world-news.png'
import communityIcon from '../assets/img/diversity.png'

import heroImage from '../assets/img/desktop-hero-image.jpeg'

export { heroImage }

const regionFilterOptions = [ "Filter by region", "Africa", "Asia", "America", "Europe", "Oceania"]

export { regionFilterOptions }

const features = [
	{
		heading: 'Detailed country information',
		content: `Discover capitals, languages, populations, landmarks, geography, culture, history and more. 
		Unleash your curiosity and explore the world.`,
		imgUrl: countryInfoIcon,
		imgAlt: 'Country information',
		path: '#!'
	},
	{
		heading: 'Interactive Maps',
		content: `Explore the world with interactive maps, uncovering geographical features, borders, landmarks
			and terrain. Immerse yourself in the beauty of our planet.`,
		imgUrl: interactiveMapsIcon,
		imgAlt: 'Interactive Maps',
		path: '#!'
	},
	{
		heading: 'International News',
		content: `Stay informed with latest news and updates from across the globe. Get a global perspective
			on current events and developments shaping our world.`,
		imgUrl: worldNewsIcon,
		imgAlt: 'International News',
		path: 'news'
	},
	{
		heading: 'International Community',
		content: `Connect with a vibrant international community, sharing experiences, and stories.
			Engage with fellow explorers, create and share content.`,
		imgUrl: communityIcon,
		imgAlt: 'International Community',
		path: '#!'
	},
]

export { features }