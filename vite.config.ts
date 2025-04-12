import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: "./tsconfig.app.json", // Use the refined tsconfig
			insertTypesEntry: true,
			rollupTypes: true,
			entryRoot: "lib", // Specify the root directory for type generation
		}),
	],
	build: {
		lib: {
			entry: "./lib/main.ts", // Entry point for the library
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
