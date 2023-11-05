
import './style.css'
import Navbar from '../../components/Navbar/Navbar'
import Userbar from '../../components/UserBar/Userbar'
import {PiDevicesFill, PiCheckCircleDuotone} from "react-icons/pi"


export default function Historico() {
    return (
        <div>
            <Navbar />

            <Userbar />

            <div className='container'>
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
                            <h6>Quizzes realizados:</h6>
                        </div>

                        <div className='infos'>
                            <PiCheckCircleDuotone size={32} color='#073B4C'/>
                            <h6>Respostas certas:</h6>
                        </div>
                    </div>

                </div>

            </div>

                

         </div>
    )
}