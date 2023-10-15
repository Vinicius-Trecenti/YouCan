import { useState } from "react"
import { instance } from "../../axios-instance"
import './style.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const response = await instance
            .post('/login', {
                email,
                password
            })
            .catch((error) => {
                console.error(error)
            })

        console.log(response?.data)
    }

    return (
        <div className="screen">
            <div className="container">
                <header>

                    <img src="assets/logo.svg" alt="logo da empresa" />

                    <div className="">
                        <p>Possui conta?</p>
                        <button>Sign Up</button>
                    </div>
                </header>

                <main>
                    <div>
                        <h1>Faça login</h1>
                        <p>FAÇA LOGIN PARA CONTINUAR A USAR SUA CONTA</p>
                    </div>

                    <form>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />


                        <button
                            onClick={handleLogin}
                        >
                            ENTRAR
                        </button>
                    </form>
                </main>

                
                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>
            <div className="banner">
                <img src="assets/banner.svg" alt="banner" />
            </div>


        </div>
    )
}