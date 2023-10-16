import Userbar from '../../components/UserBar/Userbar'
import './style.css'

export default function CreateQuiz() {
    return (
        <div className='screen'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="assets/logo.svg" alt="logo" />
                    <h1>YouCan</h1>
                </div>

                <Userbar />
            </div>

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
