import { useNavigate } from 'react-router-dom'
import HeaderUser from '../../components/HeaderUser/HeaderUser'
import './style.css'
import { useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi'
import { QuizContext } from '../../contexts/Quiz/QuizContext'

interface Subject {
    id: string
    name: string
}

export default function CreateQuiz() {
    const navigate = useNavigate()
    const api = useApi()
    const quiz = useContext(QuizContext)
    const [search, setSearch] = useState('')
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [selectedSubject, setSelectedSubject] = useState<string>()

    useEffect(() => {
        const showSubjects = async () => {
            const response = await api.showAllSubjects()
            setSubjects(response)
        }

        showSubjects()
    }, [])

    const filteredSubjects = search.length > 0
        ? subjects.filter(subject => subject.name.includes(search))
        : subjects

    const handleSubjectChange = (event: string) => {
        setSelectedSubject(event)
    }

    const handleSubmitSubject = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (selectedSubject) {
            quiz.updateQuizProperty('subject', selectedSubject)

            navigate('/create/quiz/formulario')
        } else {
            alert('Selecione uma opção!')
        }
    }

    return (
        <div className='createQuiz'>
            <HeaderUser />

            <main>
                <h1>Criar quiz</h1>
                <h2>Selecionar matéria</h2>

                <input
                    type="text"
                    className='search'
                    onChange={(e) => setSearch(e.target.value)}
                />

                <form onSubmit={handleSubmitSubject}>
                    {filteredSubjects.map((subject) => (
                        <div
                            className='subject'
                            key={subject.id}
                        >
                            <input
                                type="radio"
                                value={subject.id}
                                name='subject'
                                id={subject.id}
                                onChange={(e) => handleSubjectChange(e.target.value)}
                            />
                            <label htmlFor={subject.id}>{subject.name}</label>
                        </div>
                    ))}

                    <button type='submit'>PRÓXIMO</button>
                </form>
            </main>
        </div>
    )
}
