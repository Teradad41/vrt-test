import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
		"storycap",
	],
	framework: {
		name: "@storybook/experimental-nextjs-vite",
		options: {},
	},
	staticDirs: ["../public"],
	viteFinal: async (config) => {
		return {
			...config,
			optimizeDeps: {
				...config.optimizeDeps,
				include: [...(config.optimizeDeps?.include ?? []), "styled-jsx/style"],
			},
		};
	},
};
export default config;
