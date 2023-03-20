import "./style.css";

const MeusDados = ({nome, curso, universidade}) => {
    return(
        <div className="meusDados02">
            <h1>{nome}</h1>
            <h1>{curso}</h1>
            <h1>{universidade}</h1>
        </div>
    );
}

export default MeusDados;