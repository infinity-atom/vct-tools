import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [vue(), vueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                map_picker: resolve(__dirname, "map_picker.html"),
                map_picker_slave: resolve(__dirname, "map_picker_slave.html")
            }
        }
    }
});
