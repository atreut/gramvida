import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envDir = '';

  Object.assign(process.env, loadEnv(mode, envDir));

  return {
    build: {
      emptyOutDir: true,
    },

    envDir,

    server: {
      host: true,
      port: 8080,
      allowedHosts: ['site.gramvida'],
    },

    plugins: [vue()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
