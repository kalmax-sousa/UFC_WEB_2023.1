import React from "react";
import "./style.css"

//  ARROW FUNCTION COM RETURN
const MeusDados = () => {
    return(
        <div className="meusDados01">
            <h1>Kalmax dos Santos Sousa</h1>
            <h1>Sistemas de Informação</h1>
            <h1>UFC - Universidade Federal do Ceará</h1>
        </div>
    );
}

/*  ARROW FUNCTION SEM RETURN
const MeusDados = () => (
    <div>
        <h1>Kalmax dos Santos Sousa</h1>
        <h1>Sistemas de Informação</h1>
        <h1>UFC - Universidade Federal do Ceará</h1>
    </div>
)*/

/* FUNCTION
function MeusDados(){
    return(
        <div>
            <h1>Kalmax dos Santos Sousa</h1>
            <h1>Sistemas de Informação</h1>
            <h1>UFC - Universidade Federal do Ceará</h1>
        </div>
    );
}*/

/* CLASSES
class MeusDados extends React.Component{
    render(){
        return(
            <div>
                <h1>Kalmax dos Santos Sousa</h1>
                <h1>Sistemas de Informação</h1>
                <h1>UFC - Universidade Federal do Ceará</h1>
            </div>
        );
    }
}*/


export default MeusDados;