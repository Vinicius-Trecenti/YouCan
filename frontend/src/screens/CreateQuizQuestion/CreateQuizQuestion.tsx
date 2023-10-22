import { BsExclamationOctagon } from "react-icons/bs";
import Userbar from "../../components/UserBar/Userbar";
import './style.css'

export default function CreateQuizQuestion() {
    return (
        <div className='CreateQuizQuestion'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="assets/logo.svg" alt="logo" />
                    <h1>YouCan</h1>
                </div>

                <Userbar />
            </div>

            <main>
                <h1>Criar quiz</h1>
                <form action="" method="post">
                    <div>
                        <label><h2>Enunciado da questão</h2></label>
                        <input type="text" placeholder="Enunciado" />
                    </div>
                    <div>
                        <label><h2>Quantidade de alternativas</h2></label>
                        <input type="text" placeholder="Quantidade" />
                    </div>
                    <div>
                        <label htmlFor=""><h2>Alternativas</h2></label>
                        <input type="text" placeholder="Alternativa 1" />
                    </div>
                    <div>     
                        <input type="text" placeholder="Alternativa 2" />
                    </div>
                    <div>               
                        <input type="text" placeholder="Alternativa 3" />
                    </div>
                    <div>       
                        <input type="text" placeholder="Alternativa 4" />
                    </div>
                    <div>
                        <label htmlFor=""><h2>Alternativa Correta</h2></label>
                        <input type="text" placeholder="Alternativa" />
                    </div>
                    <div>
                        <button className="buttonNext">ADICIONAR QUESTÃO +</button>
                        <button className="buttonPublicar">PUBLICAR QUIZ</button>
                    </div>
                </form>
            </main>
        </div>

    )

}