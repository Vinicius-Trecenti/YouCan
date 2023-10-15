
import { useState } from "react"
// import PasswordInputWithToggle from "./password"
import { instance } from "../../axios-instance"
import "./style.css"
import Header from "../../components/Header/Header"


export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [dateBirth, setDateBirth] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    

    const handleRegister = async (event: { preventDefault: () => void }) => {

        event.preventDefault()

        if(password == checkPassword){
            await instance.post("/cadastro", { 
                username, email, dateBirth, password
            }) 
            .catch((error) => {
                console.error(error)
            })
            alert("USUARIO CADASTRADO!!")
        }else{
            alert("SENHA PRECISA SER IGUAL")
        }
    } 


    return (

        <div className="screen">
            <div className="container">

                <Header/>

                <main className="">
                    <div>
                        <h1 className="">Faça seu cadastro!</h1>
                        <p>FAÇA SEU CADASTRO PARA INICIAR USO DA SUA CONTA</p>
                    </div>

                    <form className="">
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

                        <input
                            type="password"
                            placeholder="senha"
                            value={password}

                            onChange={(e) => setPassword(e.target.value)}

                            className=""
                        />

                        <input
                            type="password"
                            placeholder="senha de confimação"
                            value={checkPassword}

                            onChange={(e) => setCheckPassword(e.target.value)}

                            className=""
                        />


                        {/* <PasswordInputWithToggle typePassword="Senha"/> */}

                        {/* <PasswordInputWithToggle typePassword="Confirmar senha"/> */}

                        <button className="btn-register" onClick={handleRegister}>CADASTRAR</button>
                    </form>

                </main>

                <footer>© 2022. - 2023 Todos os direitos reservados. TecnoPlay</footer>
            </div>

            
            <img src="assets/banner.svg" className="" alt="banner" />
            

        </div>
    )
}