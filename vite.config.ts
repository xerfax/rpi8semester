import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5173, // Убедитесь, что порт указан правильно
  //   open: true, // Автоматически открывать браузер
  // },
});
