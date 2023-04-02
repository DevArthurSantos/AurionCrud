import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import '@styles/global.css'
import Home from '@pages/home'
import Routers from './routers'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <div className='font-poppins bg-gray-800'>
      <Routers/>
    </div>
  </React.StrictMode>

)