
import { useContext, useState } from "react"
import { Eye } from "@phosphor-icons/react"

import Header from "../../components/Header/Header"

import "./style.css"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ dateBirth, setDateBirth ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ checkPassword, setCheckPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false) 

    const handleRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (username && email && dateBirth && password && checkPassword) {
            if (password === checkPassword) {
                const dateOfBirth = new Date(dateBirth)
                const response = await auth.register(username, email, dateOfBirth, password)

                if (response) {
                    navigate('/home')
                } else {
                    alert('ERRO')
                }
            } else {
                alert("Insira os campos de senha corretamente!")
            }
        } else {
            alert("Informe todos os campos!")
        }
    } 

    const toggleVisiblePassword = () => setShowPassword(!showPassword)

    return (

        <div className="register">
            <div className="container">

                <Header pathRoute="/"/>

                <main className="main">
                    <div>
                        <h1>Faça seu cadastro!</h1>
                        <p>FAÇA SEU CADASTRO PARA INICIAR USO DA SUA CONTA</p>
                    </div>
                    

                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            required
                            onChange={(e) => { setUsername(e.target.value) }} />


                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            required
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
                            <Eye size={32} onClick={toggleVisiblePassword} className="password-icon"/>
                        </div>

                        <div className="password">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Confirmar senha"
                                value={checkPassword}
                                onChange={(e) => setCheckPassword(e.target.value)}
                            />
                            <Eye size={32} onClick={toggleVisiblePassword} className="password-icon"/>
                        </div>

                        <button type="submit" className="btn-register" onClick={handleRegister}>CADASTRAR</button>
                    </form>

                </main>

                <footer>© 2022 - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>

            
            <img src="../src/assets/banner.svg" className="" alt="banner" />
            

        </div>
    )
}