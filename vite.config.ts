// vite.config.ts
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    // Enables Vite to resolve imports using path aliases.
    tsconfigPaths(),
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './app',
      generatedRouteTree: './app/routeTree.gen.ts',
    }),
    viteReact(),
  ],
})
