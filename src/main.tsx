import * as React from "react";
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './scss/root.scss'

createRoot(document.getElementById('root')!).render(<App />)
