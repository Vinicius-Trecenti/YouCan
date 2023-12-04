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
    const [progress, setProgress] = useState(10);
    const [numQuestao, setnumQuestao] = useState(0);
    const [questions, setQuestions] = useState<Question[]>([])
    const [materia, setMateria] = useState('Materia exemplo');
    const api = useApi()
    const [score, setScore] = useState(0);

    useEffect(() => {
        //requisição para a API para realizar a consulta do banco de dados
        const requestQuestions = async () => {
            try {
                // Obtém a URL atual
                const currentUrl = window.location.href;
                // Extrai o ID da URL
                const idFromUrl = currentUrl.split('/').pop();
                const response = await api.showQuestions(idFromUrl);
                console.log('Resposta da API:', response);
                setQuestions(response);
            } catch (error) {
                console.error('Erro ao buscar perguntas:', error);
            }
        };

        requestQuestions();
    }, []);

    // atualização de status
    const handleButtonClick = (id, pontuacao) => {
        //verifica se a questão é correta
        if (pontuacao == 1) {
            console.log('reposta correta')
            setClickedButton(id)
            //adiciona um ponto ao score
            setScore(score + 1)
        }
        else {
            console.log('resposta incorreta')
            setClickedButton(id)
        }
        console.log(pontuacao)
        // aumento da barra de progresso
        if (progress < 100) {
            setProgress(progress + 10);
        }

        // aumento do numero da questão
        if (numQuestao < 10) {
            setnumQuestao(numQuestao + 1);
        }


    };

    return (
        <div className="question">
            <HeaderUser />
            <main className="main">
                {/* Barra de progresso, matéria e numero da questão */}
                <div className='progress'>
                    <div className='info'>
                        <div><h2>{materia}</h2></div>
                        <div><h2>{numQuestao + 1}/10</h2></div>
                    </div>
                    <CustomProgressBar progress={progress} />
                </div>
                {/* div referente ao enunciado */}
                <div className="statement">
                    {questions.length > 0 ? (
                        <div>
                            {/* Enunciado da questão */}
                            <h1>{questions[numQuestao]?.enunciado}</h1>

                        </div>
                    ) : (
                        //mensagem enquanto a requisição ao banco não retorna com a questão
                        <p>Carregando perguntas...</p>
                    )}

                </div>
                {/* Div referente a parte de respostas */}
                <div className="answers">
                    {questions.length > 0 && questions[numQuestao]?.Answers ? (
                        questions[numQuestao]?.Answers.map((answer, index) => {
                            return (
                                <button
                                    // identificação dos botões e codigo para mudar de cor
                                    key={answer.id}
                                    onClick={() => handleButtonClick(answer.id, answer.pontuacao)}
                                    className={`button ${clickedButton === answer.id ? (answer.pontuacao === '1' ? 'green' : "red") : ''}`}
                                >
                                    {/* Faz o A,B,C,D */}
                                    <h2>{String.fromCharCode(65 + index)}.</h2>
                                    {/* Texto da alternativa */}
                                    <h2>{answer.alternativas}</h2>
                                </button>
                            );
                        })
                    ) : (
                        //mensagem enquanto a requisição ao banco não retorna com as alternativas
                        <p>Carregando alternativas...</p>
                    )}
                </div>
            </main >
        </div >
    )
}