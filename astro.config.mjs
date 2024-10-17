import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import ThemeRapide from './plugins/theme-rapide'

export default defineConfig({
	site: 'https://sdmodding.github.io/',
	base: 'TheoryEngine.Docs',
	integrations: [
		starlight({
			plugins: [ThemeRapide()],
			favicon: '/favicon.png',
			title: 'Theory Engine Docs',
			lastUpdated: true,
			pagination: true,
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/SDmodding/TheoryEngine.Docs',
			},
			editLink: {
				baseUrl: 'https://github.com/SDmodding/TheoryEngine.Docs/edit/main/',
			},
			components: {
			},
			sidebar: [
				{
					label: 'Illusion',
					autogenerate: { directory: 'illusion' },
				},
				{
					label: 'Quark',
					autogenerate: { directory: 'quark' },
				},
			],
		}),
	],
});
