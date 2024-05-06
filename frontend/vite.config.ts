import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { transform } from 'esbuild';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


const bundleComponents = process.env.BUNDLE_COMPONENTS ?? true;

// https://vitejs.dev/config/
export default defineConfig({
  root: './packages/lib/',
  build: {
    outDir: '../../dist/lib',
    // emptyOutDir: true,
    lib: {
      entry: './src/MyComponent.wc.svelte',
      formats: bundleComponents ? ['es', 'esm', 'umd',  'iife'] as any : ['es'],
      name: "myLibrary",
      fileName: (format) => ({
        es: `my-library.js`,
        esm: `my-library.min.js`,
        umd: `my-library.umd.js`,
        iife: 'my-library.iife.js'
      })[format]
    },
    rollupOptions: {
      output: bundleComponents ? {} : {
        inlineDynamicImports: false,
        chunkFileNames: "[name].js",
        manualChunks: { 'svelte': ["svelte"] }
      }
    }
  },
  plugins: [
    svelte({
      exclude: /\.wc\.svelte$/ as any,
      compilerOptions: {
        customElement: false
      },
    }),
    svelte({
      include: /\.wc\.svelte$/ as any,
    }),
    cssInjectedByJsPlugin({
      injectCodeFunction: function injectCSS(cssCode: string, options: any) {
          const shadow = document.getElementsByTagName("my-component")[0];
          const styles = document.createElement("style");
          styles.innerHTML = cssCode;
          shadow.shadowRoot.appendChild(styles);
      },
      topExecutionPriority: false,
    }),
    minifyEs(),
  ],
});

// Workaround for https://github.com/vitejs/vite/issues/6555
function minifyEs() {
  return {
    name: 'minifyEs',
    renderChunk: {
      order: 'post' as const,
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es' && (!bundleComponents || chunk.fileName.endsWith('.min.js'))) {
          return await transform(code, { minify: true });
        }
        return code;
      },
    }
  };
}
