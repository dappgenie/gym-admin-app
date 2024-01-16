// https://nuxt.com/docs/api/configuration/nuxt-config
import { pwa } from './config/pwa'

export default defineNuxtConfig({
  modules: [
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@vite-pwa/nuxt',
		'unplugin-turbo-console/nuxt',
		'@nuxt/image',
	],
//   turboConsole: {
// 		/* options here */
// 		disableLaunchEditor: true,
// 	},
	ssr: false,
	experimental: {
		payloadExtraction: true,
		restoreState: true,
		clientFallback: true,
		viewTransition: true,
		inlineRouteRules: true,
		// inlineSSRStyles: true,
		renderJsonPayloads: true,
		asyncContext: true,
		typedPages: true,
		// noScripts: false,
	},
	// ui: {
	// 	global: true,
	// 	icons: ['mdi'],
	// },
	// colorMode: {
	// 	classSuffix: '',
	// },
	pwa,
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	typescript: {},
	// image: {},
	sourcemap: {
		server: true,
		client: true,
	},
})
