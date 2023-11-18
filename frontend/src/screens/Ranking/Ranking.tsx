import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/NavbarLeft/Navbar";
import Userbar from "../../components/HeaderUserCustomized/Userbar";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";
import './style.css'

interface Ranking {
    usuario_id: number,
    nome: string,
    soma: number
}

export default function Ranking() {
    const api = useApi()
    const auth = useContext(AuthContext)
    const [ranking, setRanking] = useState<Ranking[]>([])

    useEffect(() => {
        const showRanking = async () => {
            const response = await api.showRanking(auth.user?.id)

            setRanking(response)
            console.log(ranking)
        }

        showRanking()
    }, [])
    return (
        <div className="ranking">
            <Navbar />

            <main>
                <Userbar />

                <h1>Ranking</h1>

                <section>
                    {ranking.map((user, index) => (
                        <div 
                            key={user.id}
                            className="user-ranking dark-blue"
                        >
                            <h2>{index+1}</h2>
                            <div className="photo-and-username">
                                <img src="../src/assets/user.svg" alt="" />
                                <h2>{user.nome}</h2>
                            </div>
                            <h2>{user.soma}</h2>
                        </div>
                    ))}

                </section>
            </main>
        </div>
    )
}
