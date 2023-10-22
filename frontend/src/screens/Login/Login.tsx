import { useState } from "react"
import { instance } from "../../utils/axios-instance"
import './style.css'

// import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSend = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (validateFormFields()) {
            try {
                const response = await instance
                .post('/login', {
                    email,
                    password
                })

                if (response?.status === 200) {
                    
                    const userID = response?.data.id

                    if (userID != 0 && userID != null) {
                        console.log('Login realizado!')
                        navigate(`/home/${userID}`);
                    } else {
                        console.error("userID não está definido.");
                    }
                } 
            
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    const validateFormFields = () => {
        if (email === "" || password === "") {
            alert("Informe todos os campos!")
            return false

        }
        return true
    }

    return (
        <div className="login">
            <div className="container">
                <Header pathRoute="registro" />

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
                            type="submit"
                            className="btn-login"
                        >
                            ENTRAR
                        </button>
                    </form>
                </main>


                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>

            <img src="src/assets/banner.svg" alt="banner" />
        </div>
    )
}