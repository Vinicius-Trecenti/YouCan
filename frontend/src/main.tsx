import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login/Login.tsx'
import Register from './screens/Resgister/Register.tsx'
import Home from './screens/Home/Home.tsx'
import Question from './screens/Question/Question.tsx'
import Error from './screens/Error/Error.tsx'
import Ranking from './screens/Ranking/Ranking.tsx'
import AlterUser from './screens/AlterUser/AlterUser.tsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login/>
//   }, 
//   {
//     path:'register',
//     element:<Register/>
//   },
//   {
//     path: 'home',
//     element: <Home/>
//   },
//   {
//     path: 'question',
//     element: <Question/>
//   },

//ROTAS ANINHADAS - QUANDO DEPENDE DE UM ID POR EXEMPLO, POSSUI UM IDENTIFICADOR UNICO
// {
//   path:'/CAMINHO/:ID', -> ESSE ID DEVE SER PASSADO NO <LINK TO='ELEMENTO/{ID}' PARA MAIS PERSONALIZADOS TEM O useParams()
//   element: 
// }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />}/>
				<Route path='/registro' element={<Register />}/>
				<Route path='/home/:id' element={<Home />}/>
				<Route path='/ranking/:id' element={<Ranking />}/>
				{/* <Route path='/historico/:id' element={<Hist} */}
				<Route path='/questao' element={<Question />}/>
				<Route path='/alterar/usuario/:id' element={<AlterUser />} />
				<Route path='*' element={<Error />}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
