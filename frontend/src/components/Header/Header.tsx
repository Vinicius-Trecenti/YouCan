import "./style.css"

import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div>
                <img src="assets/logo.svg" alt="logo da empresa" />
            </div>

            <div className="message-btn">
                <p className="">Possui conta?</p>
                <button className="btn-sign">
                    <Link to='/'>Sign in</Link>
                </button>
            </div>
        </header>
    )
}