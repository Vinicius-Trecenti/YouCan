import HeaderUser from "../../components/HeaderUser/HeaderUser"
import { useState } from "react"
import './style.css'

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



            {/* <div className="menu">

                <li><a href="#">Opções</a>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sing Out</a></li>
                    </ul>
                </li>

            </div> */}

            <div className="btn">
                <button className="btn-back">
                    Voltar
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
