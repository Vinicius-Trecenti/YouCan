// import Header from "../../components/Header/Header"
import HeaderUser from "../../components/HeaderUser/HeaderUser"
import "./style.css"
import { useEffect, useState } from 'react';
import CustomProgressBar from "../../components/ProgressBar/CustomProgressBar";
import '../../components/ProgressBar/ProgressBar.css'
import { useApi } from "../../hooks/useApi"

interface Question {
    id: string,
    quiz_id: string,
    enunciado: string,
    dica: string,
    comentario: string,
    Answers: Answers[]
}
interface Answers {
    id: string;
    pergunta_id: string;
    texto: string;
    pontuacao: string;
}


export default function Question() {
    const [clickedButton, setClickedButton] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(2);
    const [progress, setProgress] = useState(10);
    const [numQuestao, setnumQuestao] = useState(0);

    const [questions, setQuestions] = useState<Question[]>([])
    const [Answers, setAnswers] = useState<Answers[]>([])
    const api = useApi()
    
    useEffect(() => {
        // obtenção das Questões 
        const requestQuestions = async () => {
            try {
                const response = await api.showQuestions(numQuestao + 1);
                console.log('Resposta da API:', response);
                setQuestions(response);
                   
            } catch (error) {
                console.error('Erro ao buscar perguntas:', error);
            }
        }
        requestQuestions();
        //Obtenção das alternativas
        // const requestAnswers = async () => {
        //     try {
        //         const response = await api.getAnswers(questions[numQuestao].id);
        //         console.log('Resposta da API alternativa: ', response);
        //         setAnswers(response);
                
        //     } catch (error) {
        //         console.error('Erro ao buscar alternativas', error)
        //     }
        // };
        // requestAnswers();
    
    
    }, []);

    // atualização de status
    const handleButtonClick = (index) => {
        // checagem se a resposta é a certa
        if (index === correctAnswer) {
            setClickedButton(index);
        } else {
            setClickedButton(index);
        }

        // aumento da barra de progresso
        if (progress < 100) {
            setProgress(progress + 10);
        }

        // aumento do numero da questão
        if (numQuestao < 10) {
            setnumQuestao(numQuestao + 1);
        }

        setTimeout(() => {
            setClickedButton(null);
        }, 500);
    };


    return (
        <div className="question">
            <HeaderUser />

            <main className="main">
                <div className='progress'>
                    <div className='info'>
                        <div><h2>materia - materia</h2></div>
                        <div><h2>{numQuestao + 1}/10</h2></div>
                    </div>
                    <CustomProgressBar progress={progress} />
                </div>

                <div className="statement">
                    {questions.length > 0 ? (
                        <div>
                            <h1>{questions[numQuestao]?.enunciado}</h1>

                        </div>
                    ) : (
                        <p>Carregando perguntas...</p>
                    )}

                </div>

                <div className="answers">
                    {/* <button
                        onClick={() => handleButtonClick(1)}
                        className={`button ${clickedButton === 1 ? (1 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(2)}
                        className={`button ${clickedButton === 2 ? (2 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>B.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(3)}
                        className={`button ${clickedButton === 3 ? (3 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>C.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(4)}
                        className={`button ${clickedButton === 4 ? (4 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>D.</h2>
                        <h2>alternativa</h2>
                    </button> */}
                    {questions.length > 0 && questions[numQuestao]?.Answers ? (
                        questions[numQuestao]?.Answers.map((Answers) => (
                            <button
                                key={alternativa.id}
                                onClick={() => handleButtonClick(Answers.id)}
                                className={`button ${clickedButton === alternativa.id ? (Answers.id === correctAnswer ? 'green' : 'red') : ''}`}
                            >
                                <h2>{String.fromCharCode(65 + parseInt(alternativa.id, 10))}.</h2>
                                <h2>{alternativa.texto}</h2>
                            </button>
                        ))
                    ) : (
                        <p>Carregando alternativas...</p>
                    )}
                </div>

            </main >
        </div >
    )

}

