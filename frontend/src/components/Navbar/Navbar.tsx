import { House, Trophy, ClockCounterClockwise, Play, Plus } from '@phosphor-icons/react'
import './style.css'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='logo'>
                <img src="assets/logo.svg" alt="logo" />
                <h1>YouCan</h1>
            </div>

            <div className='pages'>
                <a href=""><House size={32} color='#073B4C'/>Home</a>
                <a href=""><Trophy size={32} color='#073B4C'/>Ranking</a>
                <a href=""><ClockCounterClockwise size={32} color='#073B4C'/>Histórico</a>
            </div>

            <div className='buttons'>
                <button className='btn btn-green'>Jogar Quiz <Play size={22} /></button>
                <button className='btn btn-pink'>Criar Quiz <Plus size={22} /></button>
            </div>
        </nav>
    )
}
