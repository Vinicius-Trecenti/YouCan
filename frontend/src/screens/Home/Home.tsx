import { useEffect, useState } from 'react'
import Navbar from '../../components/NavbarLeft/Navbar'
import Userbar from '../../components/HeaderUserCustomized/Userbar'

import './style.css'
import { useApi } from '../../hooks/useApi'
import { useNavigate } from 'react-router-dom'
import { MagnifyingGlass } from '@phosphor-icons/react'
// import { useNavigate, useParams } from 'react-router-dom'

interface Subject {
    id: string,
    nome: string,
    total: number
}

export default function Home() {
    const api = useApi()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [subjects, setSubjects] = useState<Subject[]>([])

    useEffect(() => {
        const showSubjects = async () => {

            const response = await api.showSubjectsWithQuizzes()

            setSubjects(response)
        }

        showSubjects()
    })

    const filteredSubjects = search.length > 0 
        ? subjects.filter(quiz => quiz.nome.includes(search))
        : subjects


    const handleScreenQuizzes = (subjectName: string, id : string) => {
        navigate(`/quizzes/${subjectName}/${id}`)
    }

    return (
        <div className="home">
            <Navbar />

            <main>
                <Userbar />

                <div className='title-and-search'>
                    <h1>Matérias</h1>
                    <MagnifyingGlass />
                    <input 
                        type="text" 
                        className='search' 
                        onChange={(e) => setSearch(e.target.value)}
                     />
                </div>
                <section className='quizzesHome'>
                    {
                        filteredSubjects.map((subject) => (
                            <div
                                key={subject.id}
                                className="quiz"
                                onClick={() => {handleScreenQuizzes(subject.nome, subject.id)}}
                                >
                                <h2>{subject.nome}</h2>
                                <div className='quiz-infos'>
                                    <p>Total: {subject.total}</p>
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
