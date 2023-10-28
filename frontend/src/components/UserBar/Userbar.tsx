import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useContext } from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function Userbar() {
    const auth = useContext(AuthContext)
    return (

        <Link to={'/alterar/usuario/'}>
            <div className='bar-user'>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <h2>{auth.user?.username}</h2>
                <Dropdown/>
            </div>

        </Link>
    )
}
