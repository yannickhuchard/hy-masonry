import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command }) => {
  // Development mode - serve the demo
  if (command === 'serve') {
    return {
      root: '.',
      server: {
        port: 5000,
        open: true,
        host: true
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    };
  }

  // Build mode - build the library
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'HyMasonry',
        fileName: (format) => `hy-masonry.${format === 'es' ? 'esm' : format}.js`,
        formats: ['es', 'umd', 'cjs']
      },
      rollupOptions: {
        external: [],
        output: {
          globals: {},
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'hy-masonry.css';
            return assetInfo.name || '';
          }
        }
      },
      sourcemap: true,
      minify: 'terser',
      target: 'es2020'
    },
    plugins: [
      dts({
        insertTypesEntry: true,
        rollupTypes: true
      })
    ],
    css: {
      modules: false
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  };
}); 