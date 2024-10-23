import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider , BrowserRouter } from "react-router-dom"
import Routers from './router'
import './index.css'
import App from './App'


const router = createBrowserRouter(Routers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
