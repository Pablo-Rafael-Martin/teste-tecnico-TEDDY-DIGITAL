import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
    return {
        plugins: [
            react(),
            federation({
                name: "shell_app",
                remotes: {
                    clientes_mfe: "http://localhost:5001/assets/remoteEntry.js",
                },
                shared: ["react", "react-dom", "react-router-dom"],
            }),
        ],
        build: {
            modulePreload: false,
            target: "esnext",
            minify: false,
            cssCodeSplit: false,
        },
    };
});
