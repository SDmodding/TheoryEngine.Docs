import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import ThemeRapide from './plugins/theme-rapide'

import { Icon } from '@astrojs/starlight/components';

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
			navbar: [
			        {
			          	label: 'Home',
			          	href: '/',
			          	icon: <Icon name="home" />,
			        },
			        {
			          	label: 'Docs',
			          	href: '/docs',
			          	icon: <Icon name="book" />,
			        },
			        {
			          	label: 'GitHub',
			          	href: 'https://github.com/SDmodding/TheoryEngine.Docs',
			          	icon: <Icon name="github" />,
			        },
			],
		}),
	],
});
