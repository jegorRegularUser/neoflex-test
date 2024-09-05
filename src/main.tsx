import { StrictMode } from 'react'
import { Container, createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
const root = document.getElementById('root') as Container
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
