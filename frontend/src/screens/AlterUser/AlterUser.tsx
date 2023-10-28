import HeaderUser from "../../components/HeaderUser/HeaderUser"
import { useState } from "react"
import './style.css'
import { Link } from 'react-router-dom'


export default function AlterUser() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [dateBirth, setDateBirth] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)


    return (
        <div className="AlterUser">

            <HeaderUser />

                <div className="btn">  
                        <button className="btn-back">
                            <Link to="/home">Voltar</Link>
                        </button>
                </div>
            

            <main>
                <div>
                    <h1>Alterar usuário</h1>
                </div>

                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        className=""
                        onChange={(e) => { setUsername(e.target.value) }} />

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        className=""
                        onChange={(e) => { setEmail(e.target.value) }} />

                    <input
                        type="date"
                        value={dateBirth}
                        className=""
                        onChange={(e) => { setDateBirth(e.target.value) }} />


                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>


                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirmar senha"
                            value={checkPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                        {/* <Eye size={32} onClick={toggleVisiblePassword} className="password-icon" /> */}
                    </div>

                    <button type="submit" className="btn-alter" >SALVAR</button>

                </form>
            </main>

        </div>
    )
}
