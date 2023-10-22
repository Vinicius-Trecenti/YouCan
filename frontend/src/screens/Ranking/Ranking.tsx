import Navbar from "../../components/Navbar/Navbar";
import Userbar from "../../components/UserBar/Userbar";
import './style.css'

export default function Ranking() {
    return (
        <div className="ranking">
            <Navbar />

            <main>
                <Userbar />

                <h1>Ranking</h1>

                <section>
                    <div className="user-ranking first-place">
                        <h2>1. </h2>
                        <div className="photo-and-username">
                            <img src="../src/assets/user.svg" alt="" />
                            <h2>Lucas</h2>
                        </div>
                        <h2>3245</h2>
                        {/* icon */}
                    </div>
                    <div className="dark-blue user-ranking ">
                        <h2>2. </h2>
                        <div className="photo-and-username">
                            <img src="../src/assets/user.svg" alt="" />
                            <h2>Lucas</h2>
                        </div>
                        <h2>3245</h2>
                        {/* icon */}
                    </div>
                    <div className="dark-blue user-ranking ">
                        <h2>2. </h2>
                        <div className="photo-and-username">
                            <img src="../src/assets/user.svg" alt="" />
                            <h2>Lucas</h2>
                        </div>
                        <h2>3245</h2>
                        {/* icon */}
                    </div>
                    <div className="dark-blue user-ranking ">
                        <h2>2. </h2>
                        <div className="photo-and-username">
                            <img src="../src/assets/user.svg" alt="" />
                            <h2>Lucas</h2>
                        </div>
                        <h2>3245</h2>
                        {/* icon */}
                    </div>
                    <div className="dark-blue user-ranking ">
                        <h2>2. </h2>
                        <div className="photo-and-username">
                            <img src="../src/assets/user.svg" alt="" />
                            <h2>Lucas</h2>
                        </div>
                        <h2>3245</h2>
                        {/* icon */}
                    </div>
                </section>
            </main>
        </div>
    )
}
