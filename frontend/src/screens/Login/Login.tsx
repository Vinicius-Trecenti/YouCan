import { useState } from "react"
import { instance } from "../../axios-instance"
import './style.css'

<<<<<<< HEAD
// import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header"
=======
import {Link} from 'react-router-dom'
import {useNavigation} from 'react-router-dom'
import { User } from "@phosphor-icons/react"


interface User{
    id:number
}
>>>>>>> 2f65d1a99480d228a6d77c522621fc8d56cf96cb

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigation()
    // DAR UM navigate('/')

    //funcao que popula o response com os dados do banco de dados 
    const [dateUser, setdateUser] = useState() //<User>()



    const handleSend = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if(validateFormFields()){
            const response = await instance
            .post('/login', {
                email,
                password
            })
            .catch((error) => {
                console.error(error)
            })

            
            setdateUser(response?.data)
            console.log(response?.data)
            
            
            // checkLogin()
            
        } 

    }

    const validateFormFields = () => {
        if (email === "" || password ==="") {
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
                <Header />

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


<<<<<<< HEAD
                        <button
                            onClick={handleLogin}
                            className="btn-login"
                        >
                            ENTRAR
=======
                        <button onClick={handleSend}>
                            <Link to='home'>Entrar</Link>
>>>>>>> 2f65d1a99480d228a6d77c522621fc8d56cf96cb
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