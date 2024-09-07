import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {TodoApp} from './components/TodoApp.tsx'
import './style.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp></TodoApp>
  </StrictMode>,
)
