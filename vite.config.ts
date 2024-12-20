import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import tsconfigPath from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	base: '/task-app',
	plugins: [react()],
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src/app'),
			shared: path.resolve(__dirname, 'src/shared'),
			pages: path.resolve(__dirname, 'src/pages'),
		},
	},
})
