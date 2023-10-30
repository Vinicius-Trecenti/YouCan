// import Header from "../../components/Header/Header"
import HeaderUser from "../../components/HeaderUser/HeaderUser"
import "./style.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomProgressBar from "../../components/ProgressBar/CustomProgressBar";
import '../../components/ProgressBar/ProgressBar.css'



export default function Question() {
    const [clickedButton, setClickedButton] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(2);
    const [progress, setProgress] = useState(0);

    const handleButtonClick = (index) => {
        if (index === correctAnswer) {
            setClickedButton(index)
            if (progress < 100) {
                setProgress(progress + 10);
              }

        } else {
            setClickedButton(index);
            if (progress < 100) {
                setProgress(progress + 10);
              }
        }
    };


    return (
        <div className="question">
            <div>
                <HeaderUser />
            </div>

            <main className="main">
                 <div className='progress'> 
                    <div className='info'> 
                        <div><h2>materia - materia</h2></div>
                        <div><h2>x/10</h2></div>
                    </div> 
                    <CustomProgressBar progress={progress} />
                </div> 

                <div className="statement">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates laudantium et animi exercitationem, recusandae consectetur! Ut quia natus iure minus illo? Facere asperiores quod necessitatibus debitis sapiente. Ducimus, molestiae inventore.</h1>
                </div>

                <div className="answers">
                    <button
                        onClick={() => handleButtonClick(1)}
                        className={`button ${clickedButton === 1 ? (1 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>A.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(2)}
                        className={`button ${clickedButton === 2 ? (2 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>B.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(3)}
                        className={`button ${clickedButton === 3 ? (3 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>C.</h2>
                        <h2>alternativa</h2>
                    </button>
                    <button
                        onClick={() => handleButtonClick(4)}
                        className={`button ${clickedButton === 4 ? (4 === correctAnswer ? 'green' : 'red') : ''}`}
                    >
                        <h2>D.</h2>
                        <h2>alternativa</h2>
                    </button>
                </div>

            </main >
        </div >
    )

}

