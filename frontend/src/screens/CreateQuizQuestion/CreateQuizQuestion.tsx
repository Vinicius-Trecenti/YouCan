import './style.css'
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../contexts/Quiz/QuizContext';
import { Alternative } from '../../types/Quiz';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';

export default function CreateQuizQuestion() {
    const navigate = useNavigate()

    const api = useApi()
    const quiz = useContext(QuizContext)

    const [statement, setStatement] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [alternatives, setAlternatives] = useState<Alternative[]>([])
    const [inputAlternatives, setInputAlternatives] = useState(['', '', '', ''])

    const handleAddQuestion = (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (statement && alternatives && correctAnswer) {            
            const points : string[] = []

            for (let i = 0; i < 4; i++) {
            
                points[i] = (i + 1).toString() === correctAnswer ? '10' : '0'

                setAlternatives(prevAlternatives => ({
                    ...prevAlternatives,
                    [i]: {
                        description: inputAlternatives[i],
                        points: points[i]
                    }
                }));
            }        

            quiz.updateQuizPropertyQuestions(
                {
                    statement,
                    alternatives
                }
            )
            // {
            //     statement: 'Sua nova pergunta?',
            //     alternatives: [{ description: 'Alternativa A', points: '1' }],
            //   }
            setStatement('')
            setInputAlternatives(['', '', '', ''])
            setCorrectAnswer('')
        } else {
            alert('Insira todos os campos!')
        }



        setStatement('')
        setInputAlternatives(['', '', '', ''])
        setCorrectAnswer('')
    }

    const handleAlternativesChange = (e: any) => {
        const { name, value } = e.target;

        setInputAlternatives((inputAlternatives) => ({
            ...inputAlternatives,
            [name]: value,
        }))
    }

    const handleSubmitQuiz = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        handleAddQuestion(event)

        try {
            await api.createQuiz(quiz.quiz)
        } catch (error) {
            console.error(error)
        }

        navigate('/home')
    }

    return (
        <div className='CreateQuizQuestion'>

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

                    <label><h2>Enunciado da questão</h2></label>
                    <input
                        type="text"
                        className='box'
                        placeholder="Enunciado"
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                    />

                    <label><h2>Alternativas</h2></label>
                    <input
                        type="text"
                        className='box'
                        placeholder="Alternativa 1"
                        name='0'
                        value={inputAlternatives[0]}
                        onChange={handleAlternativesChange}
                        required
                    />
                    <input
                        type="text"
                        className='box'
                        placeholder="Alternativa 2"
                        name='1'
                        value={inputAlternatives[1]}
                        onChange={handleAlternativesChange}
                        required
                    />
                    <input
                        type="text"
                        className='box'
                        placeholder="Alternativa 3"
                        name='2'
                        value={inputAlternatives[2]}
                        onChange={handleAlternativesChange}
                        required />
                    <input
                        type="text"
                        className='box'
                        placeholder="Alternativa 4"
                        name='3'
                        value={inputAlternatives[3]}
                        onChange={handleAlternativesChange}
                        required
                    />
                    <label><h2>Alternativa Correta</h2></label>

                    <select
                        id="altenatives"
                        name="alternatives"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        required
                    >
                        <option value="" disabled defaultValue={0}>Selecione uma opção</option>
                        <option value="1">Alternativa 1</option>
                        <option value="2">Alternativa 2</option>
                        <option value="3">Alternativa 3</option>
                        <option value="4">Alternativa 4</option>
                    </select>


                    <div>
                        <button type='submit' className="btn-add-question" onClick={handleAddQuestion}>ADICIONAR QUESTÃO +</button>
                        <button type='submit' className="btn-public-question">PUBLICAR QUIZ</button>
                    </div>
                </form>
            </main>
        </div>
    )
}