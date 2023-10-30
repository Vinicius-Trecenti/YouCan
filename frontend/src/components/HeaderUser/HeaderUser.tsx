import { Link } from "react-router-dom";
import Userbar from "../UserBar/Userbar";

import './style.css'

export default function HeaderUser() {
    return (
        <div className="header">
            <Link to={'/home'} className='logo'>
                <img src="../../src/assets/logo.svg" alt="logo" />
                <h1>YouCan</h1>
            </Link>

            <Userbar />
        </div>
    )
}
