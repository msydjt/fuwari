import type {
	GitHubEditConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

const customDomain = "msydjt.com";

export const siteConfig: SiteConfig = {
	customDomain,
	title: "MSYDJT'Blog",
	subtitle: "门上一点就通的博客",
	description:
		"一个专注于IT/互联网技术分享与实践的个人技术博客，在这里你可以找到众多前沿技术的分享与实践经验。",

	keywords: [
		"MSYDJT",
		"门上一点就通官网",
		"门上一点就通",
		"MSYDJT官网",
		"博客",
		"Blog",
		"blog",
	],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 255, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.2, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://cnb.cool/MSYDJT/fuwari/-/git/raw/main/public/files/img/IMG_2651-768x769-1.png", // Path of the favicon, relative to the /public directory
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	officialSites: [
		{ url: "https://msydjt.com", alias: "CN" },
		{ url: `https://${customDomain}`, alias: "Global" },
	],
	server: [
		{ url: "", text: "Blog" },
		{ url: `https://u.${customDomain}`, text: "Umami" },
		{ url: `https://p.${customDomain}`, text: "RandomPic" },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友链",
			url: "/friends/",
			external: false,
			icon: "material-symbols:group-outline-rounded",
		},
		{
			name: "工具",
			url: "/tools/",
			external: false,
			icon: "material-symbols:build-outline-rounded",
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://cnb.cool/MSYDJT/fuwari/-/git/raw/main/public/files/img/IMG_2651-768x769-1.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "MSYDJT",
	bio: "Protect What You Love.",
	links: [
		{
			name: "GitHub",
			icon: "github", // Local icon
			url: "https://github.com/MSYDJT",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: false,
	originalDomain: "https://eopfapi.acofork.com/pic?img=ua",
	fallbackDomain: "https://eopfapi.acofork.com/pic?img=ua",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: `https://u.${customDomain}`,
	shareId: "xx2cHSRK9sDK0MGa",
	timezone: "Asia/Shanghai",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: true,
	baseUrl: "https://github.com/MSYDJT/fuwari/blob/main/src/content/posts",
};

// todoConfig removed from here
