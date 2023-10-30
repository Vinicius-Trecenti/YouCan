import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/UserBar/Userbar'

import './style.css'
import { useApi } from '../../hooks/useApi'
import { useNavigate } from 'react-router-dom'
// import { useNavigate, useParams } from 'react-router-dom'

interface Quizzes {
    id: string,
    nome: string,
    total: number
}

export default function Home() {
    const api = useApi()
    const navigate = useNavigate()
    const [quizzes, setQuizzes] = useState<Quizzes[]>([])

    useEffect(() => {
        const showQuizzes = async () => {

            const response = await api.showQuizzes()

            setQuizzes(response)
        }

        showQuizzes()
    })

    const handleScreenQuizzes = () =>{
        navigate('/quizzes')
    }

    return (
        <div className="home">
            <Navbar />

            <main>
                <Userbar />

                <div className='title-and-search'>
                    <h1>Quizzes</h1>
                    <input type="text" className='search' />
                </div>
                <section className='quizzesHome'>
                    {
                        quizzes?.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="quiz"
                                onClick={handleScreenQuizzes}
                                >
                                <h2>{quiz.nome}</h2>
                                <div className='quiz-infos'>
                                    <p>Total: {quiz.total}</p>
                                    <p>Feitos: 3</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>

    )
}
