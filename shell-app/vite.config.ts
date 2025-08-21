import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [
            react(),
            federation({
                name: "shell_app",
                remotes: {
                    clientes_mfe: `${env.VITE_CLIENTES_MFE_URL}/assets/remoteEntry.js`,
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
