import { useParams } from "react-router-dom";
import Navbar from "../../components/NavbarLeft/Navbar";
import Userbar from "../../components/HeaderUserCustomized/Userbar";

import './style.css'
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

interface Quiz {
    id: number,
    nome: string,
    nivel: number,
    totalQuestions: number
}

export default function Quizzes() {
    const { subjectName, id } = useParams()
    const api = useApi()
    const [quizzes, setQuizzes] = useState<Quiz[]>([])
    const [search, setSearch] = useState('')
    const levels = ['fácil', 'médio', 'difícil']

    useEffect(() => {
        const showQuizzes = async () => {
            const response = await api.showQuizzes(id)
            console.log(response.data)
            setQuizzes(response.data)
        }

        showQuizzes()
    })

    const filteredQuizzes = search.length > 0
        ? quizzes.filter(quiz => quiz.nome.includes(search))
        : quizzes

    return (
        <div className="quizzes">
            <Navbar />

            <main>
                <Userbar />
                <div className='title-and-search'>
                    <h2>{subjectName}</h2>
                    <input
                        type="text"
                        className='search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <section>
                    {
                        filteredQuizzes?.map((quiz) => (
                            <div
                                key={quiz.id} 
                                className="quiz">
                                <div className="image-and-title">
                                    {/* <img src="assets/quiz.svg" alt="" /> */}
                                    <div>
                                        <h2>{quiz.nome}</h2>
                                        <strong>{quiz.totalQuestions}</strong>
                                    </div>

                                </div>

                                <strong className="level-easy">{levels[quiz.nivel]}</strong>

                                <strong>Pontos: 300</strong>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}
