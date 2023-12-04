
import './style.css'
import Navbar from '../../components/NavbarLeft/Navbar'
import Userbar from '../../components/HeaderUserCustomized/Userbar'
import { PiDevicesFill, PiCheckCircleDuotone } from "react-icons/pi"
import { useApi } from "../../hooks/useApi"
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
// import Grafic from '../../components/CircleGrafic/Grafic'
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

//feita pela usuario -> usuarioquiz
interface Historic {
    QtdQuiz: number
    TotalAcertos: string
}

//preciso da quantidade de quizzes no banco em -> quizz
interface Qtd {
    qtdQuizes: number
}

interface question{
    countQuestion: number
}

export default function Historic() {

    const auth = useContext(AuthContext)
    const api = useApi()
    const [historic, setHistoric] = useState<Historic>()
    const [quantidade, setQuantidade] = useState<Qtd>()
    const [countQuestion, setCountQuestion] = useState<question>()


    // Se você tem o total de acertos e a quantidade total de quizzes feitos, 
    //pode calcular a porcentagem de acertos com essa fórmula.
    
    
    //Por exemplo, se um aluno acertou 45 questões de um total de 60 quizzes realizados, a porcentagem de acertos seria:
    //Porcentagem de Acertos = (45 / 60) * 100 = 75%
    const progressCorrect = 100;
    //Math.floor((historic?.TotalAcertos / countAnswer)*100)

    //Porcentagem de quizzes feitos = (Quizzes feitos / Total de quizzes) * 100
    const progressQuizz = Math.floor((historic?.QtdQuiz / quantidade?.qtdQuizes) * 100);



    useEffect(() => {

        const getCountQuestion = async () => {
            try {
                const response = await api.showquestionCount()

                setCountQuestion(response)
                console.log(countQuestion)

            }catch (error) {
                console.error(error)
            }
        }

        getCountQuestion()

        const getHistoric = async () => {
            try {
                const response = await api.showInfosHistoric(auth.user?.id)

                setHistoric(response)

            } catch (error) {
                console.error(error)
            }
        }

        getHistoric()

        const getQtd = async () => {
            try{
                const response = await api.showQtdQuiz()

                setQuantidade(response)
                // console.log("entrou quatidade")
            }catch (error) {
                console.error(error)
            }
        }
        getQtd()

    }, [])



    return (
        <div className='historic'>
            <Navbar />

            <main>

                <Userbar />

                <div className='painel'>
                    <h3>Ofensiva semanal</h3>

                    <div className='painel-ofensiva'>
                        <div className='ball'>
                            <h5>D</h5>
                        </div>
                        <div className='ball'>
                            <h5>S</h5>
                        </div>
                        <div className='ball'>
                            <h5>T</h5>
                        </div>
                        <div className='ball'>
                            <h5>Q</h5>
                        </div>
                        <div className='ball'>
                            <h5>Q</h5>
                        </div>
                        <div className='ball'>
                            <h5>S</h5>
                        </div>
                        <div className='ball'>
                            <h5>S</h5>
                        </div>
                    </div>

                    <div className='infos'>
                        <div className='infos'>
                            <PiDevicesFill size={32} color='#073B4C' />
                            <h6>Quizzes realizados: {historic?.QtdQuiz} </h6>
                        </div>

                        <div className='infos'>
                            <PiCheckCircleDuotone size={32} color='#073B4C' />
                            <h6>Respostas certas: {historic?.TotalAcertos} </h6>
                        </div>
                    </div>

                </div>

                {/* <Grafic/> */}

                <div className="progress">

                    <div className='grafic'>
                        
                        <CircularProgressbar value={progressQuizz} text={`${progressQuizz}%`} />
                        <h3>Quizes Feitos</h3>
                        
                        
                    </div>

                    <div className="grafic">
                        
                        <CircularProgressbar value={progressCorrect} text={`${progressCorrect}%`} />
                        <h3>Respostas certas</h3>
                        
                    </div>

                </div>











            </main>



        </div>
    )
}
