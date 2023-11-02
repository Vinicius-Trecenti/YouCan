import HeaderUser from "../../components/HeaderUser/HeaderUser"
import { useState, useContext } from "react"
import './style.css'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useApi } from "../../hooks/useApi"
import { useNavigate } from 'react-router-dom'


export default function AlterUser() {

    const navigate = useNavigate()

    const auth = useContext(AuthContext)
    const [username, setUsername] = useState(auth.user?.username)
    // const [email, setEmail] = useState(auth.user?.email)

    // const [dateBirth, setDateBirth] = useState(auth.user?.dateBirth)
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    
    const id  = auth.user?.id

    const api = useApi()

    // const handleAlterUser = () => {
    //     if (checkPassword === showPassword) {
    //         console.log("ALO")
    //     }
    // }

     const handleAlter = async (e: { preventDefault: () => void }) => {
         e.preventDefault()
         //pegar o username -> ja tem
         //pega checkPassaword -> ja tem

        //nao pode ser null
        if(username || password){

            //verificar se é igual a o password
            if(password === checkPassword){

                //enviar pro banco
                try {
                   await api.alterUser(id, username, password)
                   navigate('/home')
                   
                } catch (error) {
                    alert("Erro na alteração")
                    console.error(error)
                }
    
            }
            else {
                alert("Senhas diferentes!")//se nao alert
            }
        }
     }


    return (
        <div className="AlterUser">

            <HeaderUser />

            {/* <div className="btn">  
                        <button className="btn-back">
                            <Link to="/home">Voltar</Link>
                        </button>
                </div> */}


            <main>
                <div>
                    <h1>Alterar usuário</h1>
                </div>

                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        className=""
                        onChange={(e) => { setUsername(e.target.value) }} />

                    {/* <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        className=""
                        onChange={(e) => { setEmail(e.target.value) }} />

                    <input
                        type="date"
                        value={dateBirth}
                        className=""
                        onChange={(e) => { setDateBirth(e.target.value) }} /> */}


                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
        
                    </div>


                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirmar senha"
                            value={checkPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                        {/* <Eye size={32} onClick={toggleVisiblePassword} className="password-icon" /> */}
                    </div>

                    <button type="submit" className="btn-alter" onClick={handleAlter}>SALVAR</button>

                </form>
            </main>

        </div>
    )
}
