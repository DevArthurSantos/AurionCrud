import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "@pages/home"
import Docs from "@pages/docs"

const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/dashboard', element: <Home /> },
  { path: '/docs', element: <Docs /> },
]

const router = createBrowserRouter(routes)

function Routers(){
  return (<RouterProvider router={router} />)
}


export default Routers