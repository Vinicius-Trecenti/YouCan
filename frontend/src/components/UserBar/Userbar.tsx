import { CaretDown } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useContext } from 'react'

export default function Userbar() {
    const auth = useContext(AuthContext)
    return (
        <Link to={'/alterar/usuario/:ïd'}>
            <div className='bar-user'>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <h2>{auth.user?.username}</h2>
                <CaretDown size={32} color='#073B4C'/>
            </div>
        </Link>
    )
}
