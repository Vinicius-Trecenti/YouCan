import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/Auth/AuthProvider.tsx'
import { AuthRequire } from './contexts/Auth/AuthRequire.tsx'

import Login from './screens/Login/Login.tsx'
import Register from './screens/Resgister/Register.tsx'
import Home from './screens/Home/Home.tsx'
import Question from './screens/Question/Question.tsx'
import Error from './screens/Error/Error.tsx'
import Ranking from './screens/Ranking/Ranking.tsx'
import AlterUser from './screens/AlterUser/AlterUser.tsx'

import './styles/global.css'
import CreateQuizQuestion from './screens/CreateQuizQuestion/CreateQuizQuestion.tsx'

export default function App() {
    return (
        <AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />}/>
					<Route path='/registro' element={<Register />}/>
					<Route path='/home' element={<AuthRequire><Home /></AuthRequire>}/>
					<Route path='/ranking' element={<AuthRequire><Ranking /></AuthRequire>}/>
					{/* <Route path='/historico/:id' element={<Hist} */}
					<Route path='/questao' element={<Question />}/>
					<Route path='/alterar/usuario/' element={<AlterUser />} />
					<Route path='/create/question/' element={<CreateQuizQuestion />} />
					<Route path='*' element={<Error />}/>
				{/* <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} /> */}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
    )
}
