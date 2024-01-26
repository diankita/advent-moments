const path = require('path')
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, '/test-setup.js'),
  },
})
