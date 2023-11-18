
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import './style.css'

export default function ResultQuiz() {
    return (
        <div className="ResultQuiz">

            <HeaderUser />

            <h1>Trigonometria</h1>

            <main>
                <div className="ResultQuiz">
                    <div className="container">
                        <img className="imagem" src="../../src/assets/result.jpg" alt="Img de resultados" />

                        <div className="box" >
                            <h3> <strong> Básico</strong> </h3>
                            <h3>Total:10 </h3>
                        </div>
                        <div className="boxNivel" >
                            <h3 className="nivel" > Nível:Fácil</h3>
                            <h3>Pontos:300</h3>
                        </div>
                    </div>

                    <hr />
                    <div className="container">
                        <h3>Acertos: 9/10</h3>
                        <h3><strong>Pontuação</strong></h3>
                        <h3><strong>270</strong></h3>
                    </div>

                </div>

            </main>
        </div>

    )
}