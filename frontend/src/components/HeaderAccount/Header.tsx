import "./style.css"

import { Link } from 'react-router-dom'

interface Rota {
    pathRoute: string
}

export default function HeaderAccount ({ pathRoute }: Rota) {
    return (
        <header className="header-account">
            <div>
                <img src="../src/assets/logo.svg" alt="logo da empresa" />
            </div>

            <div className="message-btn">
                <p className="">Possui conta?</p>
                <button className="btn-sign">
                    <Link to={pathRoute}>Sign in</Link>
                </button>
            </div>
        </header>
    )
}