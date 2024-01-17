// https://nuxt.com/docs/api/configuration/nuxt-config
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'


export default defineNuxtConfig({
  modules: [
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@vite-pwa/nuxt',
		'unplugin-turbo-console/nuxt',
		'@nuxt/image',
	],
	ssr: false,
	colorMode: {
		classSuffix: '',
	  },
	
	  nitro: {
		esbuild: {
		  options: {
			target: 'esnext',
		  },
		},
		prerender: {
		  crawlLinks: false,
		  routes: ['/'],
		  ignore: ['/hi'],
		},
	  },
	
	  app: {
		head: {
		  viewport: 'width=device-width,initial-scale=1',
		  link: [
			{ rel: 'icon', href: '/favicon.ico', sizes: 'any' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
		  ],
		  meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'description', content: appDescription },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
		  ],
		},
	  },
	pwa,
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	typescript: {},
	sourcemap: {
		server: true,
		client: true,
	},
})
