import HeaderUser from '../../components/HeaderUser/HeaderUser'
import './style.css'

export default function CreateQuiz() {
    return (
        <div className='createQuiz'>
            <HeaderUser />

            <main>
                <h1>Criar quiz</h1>
                <h2>Selecionar matéria</h2>

                <input type="text" className='search' />

                <section>
                    <div className="subject">
                        <h2>Matemática</h2>
                        <strong>Total de quizzes: 20</strong>
                    </div>
                    <div className="subject">
                        <h2>Matemática</h2>
                        <strong>Total de quizzes: 20</strong>
                    </div>
                    <div className="subject">
                        <h2>Matemática</h2>
                        <strong>Total de quizzes: 20</strong>
                    </div>
                    <div className="subject">
                        <h2>Matemática</h2>
                        <strong>Total de quizzes: 20</strong>
                    </div>

                    <button>PRÓXIMO</button>
                </section>
            </main>

        </div>
    )
}
