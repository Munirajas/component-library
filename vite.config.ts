import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name:'@hlt/react-component-library',
      formats: ['es','cjs'],
      fileName: (format) => `@hlt/react-component-library.${format}.js`,
    },
    rollupOptions:{
      external:['react','react-dom'], //to avoid bundling React
      output:{
        globals:{
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'style.css'
      }
    },
    outDir: 'dist',
    sourcemap: true,
  },
})
