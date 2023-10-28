import React, { useState } from 'react'
import { CaretDown, CaretRight } from '@phosphor-icons/react'
import './style.css'
import { Link } from 'react-router-dom'
import { ImHome3, ImUnlocked } from "react-icons/im";


function Dropdown(){

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className='drop'>

            <button onClick={() => setIsOpen((state) => !state)}>

                {!isOpen ? (
                    <CaretRight size={32} color='#073B4C'/>
                ) : (
                    <CaretDown size={32} color='#073B4C'/>
                )}
            </button>

            {isOpen &&(
                <div className="">
                    <ul>
                        <Link to="/home">
                            <li> <ImHome3/> Home</li>
                        </Link>

                        <Link to="/">
                            <li> <ImUnlocked/> Sing Out</li>
                        </Link>
                    </ul>

                </div>
            )}

        </div>
    )
}

export default Dropdown;