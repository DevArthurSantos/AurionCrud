import React from 'react'
import ReactDOM from 'react-dom/client'

import '@styles/global.css'
import Routers from './routers'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <div className='font-poppins bg-gray-800'>
      <Routers/>
    </div>
  </React.StrictMode>

)