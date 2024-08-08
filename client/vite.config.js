import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        historyApiFallback: true, // Ensures that client-side routing works
    },
});
