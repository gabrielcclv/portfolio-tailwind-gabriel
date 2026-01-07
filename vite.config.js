import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss()],
	base: process.env.NODE_ENV === 'production' ? '/portfolio-tailwind-gabriel/' : '/',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
	},
	server: {
		watch: {
			usePolling: true,
			interval: 100,
		},
		hmr: true,
	},
});
