import "./style.css"
export default function Header() {
    return (
        <header>
            <div>
                <img src="assets/logo.svg" alt="logo da empresa" />
            </div>

            <div className="message-btn">
                <p className="">Possui conta?</p>
                <button className="btn-sign">Sign in</button>
            </div>
        </header>
    )
}