import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://sdmodding.github.io/',
	//base: 'TheoryEngine.Docs',
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'Theory Engine Docs',
			lastUpdated: true,
			pagination: true,
			logo: {
				src: './src/assets/logo.png',
				replacesTitle: true,
			},
			customCss: [
			  './src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/SDmodding/TheoryEngine.Docs',
			},
			editLink: {
				baseUrl: 'https://github.com/SDmodding/TheoryEngine.Docs/edit/main/',
			},
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
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
