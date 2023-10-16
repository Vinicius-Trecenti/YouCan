import './style.css'

export default function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <img src="assets/logo.svg" alt="logo" />
                <h1>YouCan</h1>
            </div>

            <div className='pages'>
                <a href="">Home</a>
                <a href="">Ranking</a>
                <a href="">Histórico</a>
            </div>

            <div className='buttons'>
                <button className='btn btn-green'>Jogar Quiz</button>
                <button className='btn btn-pink'>Criar Quiz</button>
            </div>
        </nav>
    )
}
