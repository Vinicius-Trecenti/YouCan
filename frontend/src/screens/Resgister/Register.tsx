
import { useState } from "react"
import { instance } from "../../axios-instance"
import { Eye } from "@phosphor-icons/react"

import Header from "../../components/Header/Header"


import "./style.css"

export default function Register() {

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ dateBirth, setDateBirth ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ checkPassword, setCheckPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false) 

    const validateFormFields = () => {
        if (username === "" || email === "" || dateBirth === "" || password === "" || checkPassword === "") {
            alert("Informe todos os campos!")
            return false
            
        } else if (password != checkPassword) {
            alert("Insira os campos de senha corretamente!")
            return false
        }

        return true
    }

    const handleRegister = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        if(validateFormFields()){
            await instance.post("/cadastro", { 
                username, email, dateBirth, password
            }) 
            .catch((error) => {
                console.error(error)
            })
            alert("USUARIO CADASTRADO!!")
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

            
            <img src="assets/banner.svg" className="" alt="banner" />
            

        </div>
    )
}