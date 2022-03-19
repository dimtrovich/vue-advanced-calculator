import fr from './fr'

const data = {
	fr
}

export default function(key, locale = 'fr') {
	if (! (locale in data)) {
		locale = 'fr'
	}
	return data[locale][key] || key
}