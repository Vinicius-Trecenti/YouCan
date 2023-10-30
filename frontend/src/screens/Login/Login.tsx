import { useContext, useState } from "react"
// import { instance } from "../../hooks/useApi" 
import './style.css'

// import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"


export default function Login() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSend = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (email && password) {
            try {
                const isLogged = await auth.signIn(email, password)

                if (isLogged) {
                    navigate(`/home`)
                } else {
                    alert('Credenciais erradas!')
                }

            } catch (error) {
                console.log(error)
                alert('Credenciais erradas!')
            }
        } else {
            alert('Insira todos os campos!')
        }


    }

    return (
        <div className="login">
            <div className="container">
                <Header pathRoute="/registro" />

                <main>
                    <div>
                        <h1>Faça login</h1>
                        <p>FAÇA LOGIN PARA CONTINUAR A USAR SUA CONTA</p>
                    </div>

                    <form onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn-login"
                        >
                            ENTRAR
                        </button>
                    </form>
                </main>


                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>

            <img src="../src/assets/banner.svg" alt="banner" />
        </div>
    )
}