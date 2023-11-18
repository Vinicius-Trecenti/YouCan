import './style.css'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { useContext } from 'react'
import Dropdown from '../Dropdown/Dropdown'

export default function HeaderUserCustomized() {
    const auth = useContext(AuthContext)

    return (
        <div className='header-user-customized'>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
            <h2>{auth.user?.username}</h2>
            <Dropdown />
        </div>
    )
}
