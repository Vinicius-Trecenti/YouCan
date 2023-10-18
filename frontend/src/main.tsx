import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login/Login.tsx'
import Register from './screens/Resgister/Register.tsx'
import Home from './screens/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  }, 
  {
    path:'register',
    element:<Register/>
  },
  {
    path: 'home',
    element: <Home/>
  },

  //ROTAS ANINHADAS - QUANDO DEPENDE DE UM ID POR EXEMPLO, POSSUI UM IDENTIFICADOR UNICO
  // {
  //   path:'/CAMINHO/:ID', -> ESSE ID DEVE SER PASSADO NO <LINK TO='ELEMENTO/{ID}' PARA MAIS PERSONALIZADOS TEM O useParams()
  //   element: 
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
