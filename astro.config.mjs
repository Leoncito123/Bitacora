// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  
  // Configuración para GitHub Pages
  site: 'https://leoncito123.github.io',
  base: '/absent-ascension',
  
  // Configuración de build para GitHub Pages
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  }
});