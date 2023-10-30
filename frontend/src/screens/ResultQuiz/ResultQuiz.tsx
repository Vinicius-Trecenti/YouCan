
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import './style.css'

export default function ResultQuiz() {
    return (
        <div className="ResultQuiz">

            <HeaderUser />

            <main>
                <h1>Trigonometria</h1>
    

            <div className="ResultQuiz">

                <div className="container">
                    <img className="imagem" src="../../src/assets/result.jpg" alt="Img de resultados" />
                    <div className="container">
                        <h3>Básico </h3>
                        <h3>Total:10 </h3>
                    </div>
                
                </div>
                <div>
                    <h3>Nível:Fácil</h3>
                    <h3>Pontos:300</h3>
                    
                </div>
                <div className="line">_____________</div>
            
            </div>
           
            </main>
        </div>

    )
}