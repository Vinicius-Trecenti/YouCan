<<<<<<< HEAD
// import Header from "../../components/Header/Header"
import HeaderUser from "../../components/HeaderUser/HeaderUser"
=======

>>>>>>> pageQuestion
import "./style.css"
import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from './ProgressBar';


export default function Question() {
    const [data, setData] = useState(null);
    const [buttonColor, setButtonColor] = useState('button');

    const handleButtonClick = async () => {
        try {
            const response = await axios.get('/api/verificar-dados'); // Faça uma solicitação GET para verificar os dados no banco de dados
            setData(response.data);

            if (response.data === 'verde') {
                setButtonColor('green');
            } else {
                setButtonColor('red');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="screen">
            <div>
                <HeaderUser />
            </div>

            <main>
                <div className='progress'>
                    <div className='info'>
                        <h2>materia - materia</h2>
                        <h2>x/10</h2>
                    </div>
                    <div>
                        {/* barra mto louca */}
                    </div>
                </div>

                <div className="statement">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laudantium et animi exercitationem, recusandae consectetur! Ut quia natus iure minus illo? Facere asperiores quod necessitatibus debitis sapiente. Ducimus, molestiae inventore.</h1>
                </div>

                <div className="answers">
                    <button className="button" >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button className="button" >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button className="button" >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button className="button" >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>

                    <div>
                        <button
                            onClick={handleButtonClick}
                            style={{ backgroundColor: buttonColor }}
                        >
                            Verificar Dados
                        </button>
                        <p>Dados do Banco de Dados: {data}</p>
                    </div>

                </div>
            </main>
        </div>
    )


}

