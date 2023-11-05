import { House, Trophy, ClockCounterClockwise, Play, Plus } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='logo'>
                <img src="../src/assets/logo.svg" alt="logo" />
                <h1>YouCan</h1>
            </div>

            <div className='pages'>
                <Link to={'/home'}><House size={32} color='#073B4C'/>Home</Link> 
                <Link to={'/ranking'}><Trophy size={32} color='#073B4C'/>Ranking</Link>
                <Link to={'/Historico'}><ClockCounterClockwise size={32} color='#073B4C'/>Histórico</Link>
            </div>

            <div className='buttons'>
                <Link to={'/home'} className='btn btn-green'>Jogar Quiz <Play size={22} /></Link>
                <Link to={'/create/quiz/materia'} className='btn btn-pink'>Criar Quiz <Plus size={22} /></Link>
            </div>
        </nav>
    )
}
