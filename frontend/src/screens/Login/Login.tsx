import { useState } from "react"
import { instance } from "../../axios-instance"
import './style.css'

// import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header"
import { Navigate } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const navigate = useNavigation()
    // DAR UM navigate('/')

    //funcao que popula o response com os dados do banco de dados 
    // const [dateUser, setdateUser] = useState() //<User>()

    const navigateToHome = () => {
        return <Navigate to="home" />
    }

    const handleSend = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if (validateFormFields()) {
            const response = await instance
                .post('/login', {
                    email,
                    password
                })
                .catch((error) => {
                    console.error(error)
                })

            // setdateUser(response?.data)
            if (response?.status == 200) {
                navigateToHome

            }

            alert("Dados Inválidos!")
        }

    }

    const validateFormFields = () => {
        if (email === "" || password === "") {
            alert("Informe todos os campos!")
            return false

        }
        return true
    }

    //dataUser salvando o login que vem do banco
    // const checkLogin = () => {
    //     if(dateUser == "" ){
    //         alert("logado!")
    //     }else{
    //         alert("Dados incorretos")
    //     }
    // }

    return (
        <div className="login">
            <div className="container">
                <Header pathRoute="register" />

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
                            onClick={handleSend}
                            className="btn-login"
                        >
                            ENTRAR
                        </button>
                    </form>
                </main>


                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>

            <img src="assets/banner.svg" alt="banner" />
        </div>
    )
}