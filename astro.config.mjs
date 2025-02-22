import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from 'starlight-image-zoom'
import icon from 'astro-icon';
import ThemeObsidian from "./plugins/theme-obsidian"

export default defineConfig({
	site: "https://docs.sdmodding.win",
	base: "",
	build: {
		assets: "_dep"
	},
	integrations: [
		icon(),
		starlight({
			plugins: [ starlightImageZoom(), ThemeObsidian() ],
			favicon: "/favicon.png",
			title: "Theory Engine Docs",
			lastUpdated: true,
			pagination: true,
            customCss: [
				"@fontsource/inter/400.css",
				"@fontsource/inter/600.css",
                "./src/styles/global.css"
            ],
			logo: {
				src: "./src/assets/logo.png",
				replacesTitle: true,
			},
			social: {
				github: "https://github.com/SDmodding/TheoryEngine.Docs",
			},
			editLink: {
				baseUrl: "https://github.com/SDmodding/TheoryEngine.Docs/edit/main/",
			},
			components: {
			},
			sidebar: [
				{ label: "[book] Quark", collapsed: true, autogenerate: { directory: "quark" } },
				{ label: "[cube] Illusion", collapsed: true, autogenerate: { directory: "illusion" } },
				{ label: "[gamepad] Sleeping Dogs", collapsed: true, autogenerate: { directory: "sd" } },
			]
		}),
	],
});
