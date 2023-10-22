import Userbar from "../UserBar/Userbar";

import './style.css'

export default function HeaderUser() {
    return (
        <div className="header">
            <div className='logo'>
                <img src="../src/assets/logo.svg" alt="logo" />
                <h1>YouCan</h1>
            </div>

            <Userbar />
        </div>
    )
}
