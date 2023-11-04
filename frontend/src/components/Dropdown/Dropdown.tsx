import { useContext, useState } from 'react'

import { CaretDown, CaretRight, House, SignOut, User } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth/AuthContext';

import './style.css'

export default function Dropdown() {
    const auth = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const handleSignOut = () => {
        auth.signOut()
    }

    return (
        <div className='drop'>

            <button onClick={() => setIsOpen((state) => !state)}>

                {!isOpen ? (
                    <CaretRight size={32} color='#073B4C' />
                ) : (
                    <CaretDown size={32} color='#073B4C' />
                )}
            </button>

            {isOpen && (
                <div className="menu">
                    <ul>
                        <Link to="/home">
                            <li> <House /> Home</li>
                        </Link>

                        <Link to="/alterar/usuario">
                            <li> <User /> Alterar</li>
                        </Link>

                        <Link to="/" onClick={handleSignOut}>
                            <li> <SignOut /> Sign Out</li>
                        </Link>
                    </ul>

                </div>
            )}

        </div>
    )
}