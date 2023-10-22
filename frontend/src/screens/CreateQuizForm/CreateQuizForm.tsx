import { BsExclamationOctagon } from "react-icons/bs";
import Userbar from "../../components/UserBar/Userbar";
import './style.css'

export default function CreateQuizForm() {
    return (
        <div className='CreateQuizForm'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="assets/logo.svg" alt="logo" />
                    <h1>YouCan</h1>
                </div>

                <Userbar />
            </div>




            <main >
                <h1>Criar quiz</h1>
                <form action="" method="post">
                    <div>
                        <label><h2>Nome do quiz:</h2></label>
                        <input type="text" placeholder="Nome do quiz"/>
                    </div >
                    <div>
                        <label><h2>Descrição </h2></label>
                        <input className="description" type="text" placeholder="Descrição"/>
                        <button className="buttonNext">PRÓXIMO</button>
                    </div>
                </form>
            </main>
        </div>

    )

}
