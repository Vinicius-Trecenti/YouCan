import HeaderUser from "../../components/HeaderUser/HeaderUser";

import './style.css'

export default function CreateQuizForm() {
    return (
        <div className='CreateQuizForm'>

            <HeaderUser />

            <div className="btn">
                <button className="btn-back" >
                    Voltar&nbsp;
                    <img src="../../src/assets/return.svg" alt="returnbutton" />

                </button>
            </div>
            <main >

                <h1>Criar quiz</h1>

                <form>

                    <label><h2>Nome do quiz:</h2></label>
                    <input
                        type="text"
                        className="btn-quizname"
                        placeholder="Nome do quiz" />

                    <div>
                        <label><h2>Descrição </h2></label>
                        <textarea
                            rows={30}
                            className="btn-description"
                            placeholder="Descrição" />
                    </div>
                    <button type="submit" className="btn-next">PRÓXIMO</button>
                </form>
            </main>

        </div>
    )
}
