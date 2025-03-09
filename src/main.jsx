import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Login from './Login.jsx'
import Register from './Register.jsx';
import Home from './Home.jsx';


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Home/>
  </StrictMode>,

)
