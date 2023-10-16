import Navbar from "../../components/Navbar/Navbar";
import Userbar from "../../components/UserBar/Userbar";

import './style.css'

export default function Quizzes() {
    return (
        <div className="screen">
            <Navbar />

            <main>
                <Userbar />
                <div className='title-and-search'>
                    <h2>Matemática</h2>
                    <input type="text" className='search' />
                </div>

                <section>
                    <div className="quiz">
                        <div className="image-and-title">
                            <img src="assets/quiz.svg" alt="" />
                            <div>
                                <h2>Básico</h2>
                                <strong>Total: 10</strong>
                            </div>

                        </div>

                        <strong className="level-easy">Nível: Fácil</strong>

                        <strong>Pontos: 300</strong>
                    </div>
                    <div className="quiz">
                        <div className="image-and-title">
                            <img src="assets/quiz.svg" alt="" />
                            <div>
                                <h2>Básico</h2>
                                <strong>Total: 10</strong>
                            </div>

                        </div>

                        <strong className="level-high">Nível: Fácil</strong>

                        <strong>Pontos: 300</strong>
                    </div>
                    <div className="quiz">
                        <div className="image-and-title">
                            <img src="assets/quiz.svg" alt="" />
                            <div>
                                <h2>Básico</h2>
                                <strong>Total: 10</strong>
                            </div>

                        </div>

                        <strong className="level-medium">Nível: Fácil</strong>

                        <strong>Pontos: 300</strong>
                    </div>
                    <div className="quiz">
                        <div className="image-and-title">
                            <img src="assets/quiz.svg" alt="" />
                            <div>
                                <h2>Básico</h2>
                                <strong>Total: 10</strong>
                            </div>

                        </div>

                        <strong className="level-easy">Nível: Fácil</strong>

                        <strong>Pontos: 300</strong>
                    </div>
                </section>
            </main>
        </div>
    )
}
