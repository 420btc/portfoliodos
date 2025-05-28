import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './components/language-switcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <LanguageProvider>
        <ToastProvider />
        <App />
      </LanguageProvider>
    </HeroUIProvider>
  </React.StrictMode>,
)