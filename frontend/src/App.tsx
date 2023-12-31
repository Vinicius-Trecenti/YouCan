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
import CreateQuizForm from './screens/CreateQuizForm/CreateQuizForm.tsx'
import ResultQuiz from './screens/ResultQuiz/ResultQuiz.tsx'
import Quizzes from './screens/Quizzes/Quizzes.tsx'
import CreateQuiz from './screens/CreateQuiz/CreateQuiz.tsx'
import Historico from './screens/Historic/Historic.tsx'
import { QuizProvider } from './contexts/Quiz/QuizProvider.tsx'

export default function App() {
	return (
		<AuthProvider>
			<QuizProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/registro' element={<Register />} />
						<Route path='/home' element={<AuthRequire><Home /></AuthRequire>} />
						<Route path='/ranking' element={<AuthRequire><Ranking /></AuthRequire>} />
						<Route path='/questao/:id' element={<Question />} />
						<Route path='/alterar/usuario/' element={<AlterUser />} />
						<Route path='/create/quiz/materia' element={<CreateQuiz />} />
						<Route path='/create/quiz/question' element={<CreateQuizQuestion />} />
						<Route path='/create/quiz/formulario' element={<CreateQuizForm />} />
						<Route path='/result/quiz/' element={<ResultQuiz />} />
						<Route path='/quizzes/:subjectName/:id' element={<Quizzes />} />
						<Route path='/historico' element={<Historico />} />
						<Route path='*' element={<Error />} />

						{/* <Route path='/historico/:id' element={<Hist} */}
						{/* <Route path='/confirm/popup' element={<ConfirmPopUp />} /> */}
						{/* <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} /> */}
					</Routes>
				</BrowserRouter>
			</QuizProvider>

		</AuthProvider>
	)
}
