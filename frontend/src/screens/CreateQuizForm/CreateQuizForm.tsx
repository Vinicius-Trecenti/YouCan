import { useNavigate } from "react-router-dom";
import HeaderUser from "../../components/HeaderUser/HeaderUser";

import './style.css'
import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/Quiz/QuizContext";

export default function CreateQuizForm() {
    const navigate = useNavigate()
    const quiz = useContext(QuizContext)
    const [quizName, setQuizName] = useState('')
    const [quizDescription, setQuizDescription] = useState('')

    const handleSubmitQuiz = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (quizName && quizDescription) {
            quiz.updateQuizProperty('name', quizName)
            quiz.updateQuizProperty('description', quizDescription)

            navigate('/create/quiz/question')
        } else {
            alert('Insira os Campos!')
        }

    }

    return (
        <div className='CreateQuizForm'>

            <HeaderUser />

            {/* <div className="btn">
                <button className="btn-back" >
                    Voltar&nbsp;
                    <img src="../../src/assets/return.svg" alt="returnbutton" />

                </button>
            </div> */}
            <main>
                <h1>Criar quiz</h1>

                <form onSubmit={handleSubmitQuiz}>
                    <label><h2>Nome do quiz:</h2></label>
                    <input
                        type="text"
                        className="btn-quizname"
                        placeholder="Nome do quiz"
                        onChange={(e) => setQuizName(e.target.value)}
                    />

                    <label><h2>Descrição </h2></label>
                    <textarea
                        rows={30}
                        className="btn-description"
                        placeholder="Descrição"
                        onChange={(e) => setQuizDescription(e.target.value)}
                    />

                    <button type="submit" className="btn-next">PRÓXIMO</button>
                </form>
            </main>
        </div>
    )
}
