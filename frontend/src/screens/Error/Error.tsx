import './style.css'
import { Link } from 'react-router-dom'


export default function Error() {
    return (
        <div className="error">
            <h1>Estamos em manutenção '-' </h1> 

            
            <img src="../src/assets/image.gif" alt=""/>
            

            <h2>ERRO - esse site esta em construção pedimos desculpas pelo transtorno</h2>

            <button className="btn-sign">
                <Link to={'/'}>Sign in</Link>
            </button>
        </div>
    )
}
