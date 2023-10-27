import { BsExclamationOctagon } from "react-icons/bs";
import Userbar from "../../components/UserBar/Userbar";
import './style.css'
import Header from "../../components/Header/Header";
import HeaderUser from "../../components/HeaderUser/HeaderUser";

export default function CreateQuizForm() {
    return (
        <div className='CreateQuizForm'>
           
                <HeaderUser />

                <main >
                    <div>
                        <h1>Criar quiz</h1>
                    </div>

                    <form>
                        
                            <label><h2>Nome do quiz:</h2></label>
                            <input 
                                type="text" 
                                className="quizname"
                                placeholder="Nome do quiz" />
                        
                        <div>
                            <label><h2>Descrição </h2></label>
                            <input
                                type="text" 
                                className="description"
                                placeholder="Descrição" />  
                        </div>
                        <button type="submit" className="btn-next">PRÓXIMO</button>
                    </form>
                </main>
            
        </div>
    )
}
