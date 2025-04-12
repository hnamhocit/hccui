import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		react(), // Added react plugin
		dts({
			insertTypesEntry: true,
		}),
		tailwindcss(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "hccui",
			fileName: "hccui",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "ReactJsxRuntime",
				},
			},
		},
	},
});
