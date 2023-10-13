import { useState } from "react"
import { instance } from "../../axios-instance"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
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
        <div className="flex justify-between bg-white">
            <div className="flex-col gap-4">
                <header className="flex justify-between">
                    <img src="assets/logo.svg" alt="logo da empresa" />

                    <div className="flex">
                        <p className="text-3xl font-bold underline">Possui conta?</p>
                        <button className="bg-blue-dark px-6 py-2 white">Sign Up</button>
                    </div>
                </header>

                <main>
                    <h1>Faça login</h1>
                    <p>FAÇA LOGIN PARA CONTINUAR A USAR SUA CONTA</p>

                    <form>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="h-16 px-6 py-5 rounded border border-zinc-600 justify-start items-center "
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />


                        <button onClick={handleLogin}>Entrar</button>
                    </form>
                </main>
                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>
            <div>
                <img src="assets/banner.svg" alt="banner" />
            </div>
        </div>
    )
}