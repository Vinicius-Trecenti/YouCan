
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/UserBar/Userbar'
import './style.css'
import { instance } from '../../axios-instance'

interface Quizzes {
    id: string,
    materia: string,
    nivel: number,
    total: number
}

export default function Home() {
    const [quizzes, setQuizzes] = useState<Quizzes[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get('/quizzes')
                setQuizzes(response.data)


            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="screen">
                <Navbar />

                <main>
                    <Userbar />

                    <div className='title-and-search'>
                        <h2>Quizzes</h2>
                        <input type="text" className='search' />
                    </div>
                    <section className='quizzes'>
                        {
                            quizzes?.map((quiz) => (
                                <div
                                    key={quiz.id}
                                    className="quiz">
                                    <h3>{quiz.materia}</h3>
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
        </>
    )
}
