import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<>Login Page</>} />
        <Route path='/signup' element={<>Sign Up Page</>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
