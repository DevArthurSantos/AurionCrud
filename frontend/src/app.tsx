import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import '@styles/global.css'
import Routers from './routers'
import { AppContextProvider } from './infra/context/provider'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <StrictMode>
    <AppContextProvider>
      <div className='font-poppins bg-gray-800'>
        <Routers />
      </div>
    </AppContextProvider>
  </StrictMode>

)