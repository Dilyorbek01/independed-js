import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. BrowserRouter'ni yuklaymiz
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. App komponentini BrowserRouter bilan daxshatli tarzda o'raymiz! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
