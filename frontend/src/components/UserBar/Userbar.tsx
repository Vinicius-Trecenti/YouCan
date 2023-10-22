import { CaretDown } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Userbar() {
    return (
        <Link to={'/alterar/usuario/:ïd'}>
            <div className='bar-user'>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <h2>Lucas</h2>
                <CaretDown size={32} color='#073B4C'/>
            </div>
        </Link>
    )
}
