import {
	countryInfoIcon,
	interactiveMapsIcon,
	worldNewsIcon,
	communityIcon
} from '../../constants/index'

function getFeatures() {
	const features = 
	[
		{
			heading: 'Detailed country information',
			content: `Discover capitals, languages, populations, landmarks, geography, culture, history and more. 
			Unleash your curiosity and explore the world.`,
			imgUrl: countryInfoIcon,
			imgAlt: 'Country information',
			path: '#!',
			cta: 'Unveil Hidden Wonders'
		},
		{
			heading: 'Interactive Maps',
			content: `Explore the world with interactive maps, uncovering geographical features, borders, landmarks
				and terrain. Immerse yourself in the beauty of our planet.`,
			imgUrl: interactiveMapsIcon,
			imgAlt: 'Interactive Maps',
			path: '#!',
			cta: 'Explore Interactive Maps'
		},
		{
			heading: 'International News',
			content: `Stay informed with latest news and updates from across the globe. Get a global perspective
				on current events and developments shaping our world.`,
			imgUrl: worldNewsIcon,
			imgAlt: 'International News',
			path: '#!',
			cta: 'Access Breaking News'
		},
		{
			heading: 'International Community',
			content: `Connect with a vibrant international community, sharing experiences, and stories.
				Engage with fellow explorers, create and share content.`,
			imgUrl: communityIcon,
			imgAlt: 'International Community',
			path: '#!',
			cta: 'Connect and Share'
		},
	]

	return features
}

export { getFeatures }