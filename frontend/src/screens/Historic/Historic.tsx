
import './style.css'
import Navbar from '../../components/NavbarLeft/Navbar'
import Userbar from '../../components/HeaderUserCustomized/Userbar'
import {PiDevicesFill, PiCheckCircleDuotone} from "react-icons/pi"
import { useApi } from "../../hooks/useApi"
import { useEffect, useState, useContext  } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"

interface Historic {
    QtdQuiz: number,
    TotalAcertos: string;
}



export default function Historic() {

    const auth = useContext(AuthContext)

    const api = useApi()

    const [historic, setHistoric] = useState<Historic>()
    // console.log('teste pra ver se pega o historico')

    useEffect(() => {
        const getHistoric = async () => {
            try {
                const response = await api.showInfosHistoric(auth.user?.id)
                
                setHistoric(response.data)
                console.log(historic)
                
            } catch (error) {
                console.error(error)
            }
        }
    })

    

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
                            <h6>Quizzes realizados:  </h6>
                        </div>

                        <div className='infos'>
                            <PiCheckCircleDuotone size={32} color='#073B4C'/>
                            <h6>Respostas certas: </h6>
                        </div>
                    </div>

                </div>

            </main>

                

         </div>
    )
}