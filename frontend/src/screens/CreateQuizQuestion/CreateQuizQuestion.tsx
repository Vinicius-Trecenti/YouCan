import './style.css'
import HeaderUser from "../../components/HeaderUser/HeaderUser";

export default function CreateQuizQuestion() {
    return (
        <div className='CreateQuizQuestion'>

            <HeaderUser />

            <div className="btn">
                <button className="btn-back" >
                Voltar&nbsp;
                <img src="../../src/assets/return.svg" alt="returnbutton" /> 
                    
                </button>
            </div>

            <main>
                <div>
                    <h1>Criar quiz</h1>
                </div>

                <form>


                    <label><h2>Enunciado da questão</h2></label>
                    <input type="text" placeholder="Enunciado" />



                    <label><h2>Quantidade de alternativas</h2></label>
                    <input
                        type="text"
                        className=''
                        placeholder="Quantidade" />

                    <label><h2>Alternativas</h2></label>
                    <input
                        type="text"
                        className=''
                        placeholder="Alternativa 1" />
                    <input
                        type="text"
                        className=''
                        placeholder="Alternativa 2" />
                    <input
                        type="text"
                        className=''
                        placeholder="Alternativa 3" />
                    <input
                        type="text"
                        className=''
                        placeholder="Alternativa 4" />
                    <label><h2>Alternativa Correta</h2></label>
                    <input
                        type="text"
                        className=''
                        placeholder="Alternativa" />
                    <div>
                        <button className="buttonNext">ADICIONAR QUESTÃO +</button>
                        <button className="buttonPublicar">PUBLICAR QUIZ</button>
                    </div>
                </form>
            </main>
        </div>

    )

}