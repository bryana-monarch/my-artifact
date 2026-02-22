import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SprintCycle from './SprintCycle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SprintCycle />
  </StrictMode>,
)
