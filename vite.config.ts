import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    allowedHosts: [
      'challenge-13-i5su.onrender.com', // Add the host you want to allow
    ]
  },

});

