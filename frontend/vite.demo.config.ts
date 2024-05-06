import { defineConfig } from 'vite'


export default defineConfig({
    root: "./packages/demo",
    build: {
        outDir: '../../dist/demo',
        emptyOutDir: true
      },
})
