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
        <div className="flex bg-[white] max-w-[1440px] h-screen gap-0 text-gray-dark">
            <div className="flex flex-col basis-2/3 w-max justify-between items-center text-center mt-10 mb-16 mx-16">
                <header className="flex col-span-2 gap-4">
                    <div>
                        <img src="assets/logo.svg" alt="logo da empresa" />
                    </div>
                    

                    <div className="flex gap-4 items-center">
                        <p className="">Possui conta?</p>
                        <button className="bg-blue-dark text-[white] text-2xl px-6 py-2">Sign Up</button>
                    </div>
                </header>

                <main className="flex flex-col gap-14 max-w-[550px]">
                    <div>
                        <h1 className="text-blue-dark text-3xl pb-2">Faça login</h1>
                        <p>FAÇA LOGIN PARA CONTINUAR A USAR SUA CONTA</p>   
                    </div>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="h-15 px-6 py-5 bg-[white]  border-2 border-gray-dark rounded"
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        
                            className="h-15 px-6 py-5 bg-[white] max-w-[550px] border-2 border-gray-dark rounded"
                        />


                        <button 
                            onClick={handleLogin} 
                            className="bg-blue-light px-6 py-4 text-[white]"
                        >
                            ENTRAR
                        </button>
                    </form>
                </main>
                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>
        
                <img src="assets/banner.svg" className="h-screen w-max basis-1/3" alt="banner" />

        </div>
    )
}