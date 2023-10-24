import { CaretDown } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { AuthContext } from '../../contexts/Auth/AuthContext'


export default function Userbar() {
    const auth = useContext(AuthContext)
    
    return (
        <Link to={'/alterar/usuario/'}>
            <div className='bar-user'>
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                <h2>Lucas</h2>
                <CaretDown size={32} color='#073B4C'/>
            </div>
        </Link>
    )
}
