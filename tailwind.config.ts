import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>> {
	// darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary:'#0069CA'
			},
		},
	},
}
