// import Header from "../../components/Header/Header"
import HeaderUser from "../../components/HeaderUser/HeaderUser"
import "./style.css"

export default function Question(){

    return(
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
                        
                        
                    

                </div>
            </main>


        </div>
    )


}

