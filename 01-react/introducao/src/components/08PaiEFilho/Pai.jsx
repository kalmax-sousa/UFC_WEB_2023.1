import Filho from "./Filho";

const Pai = () => {

    const mensagemDoFilho = (msg) => {
        alert("Meu filho disse: " + msg);
    }

    return(
        <div>
            <h1>Pai</h1>
            <Filho msg={mensagemDoFilho}/>
        </div>
    );
}

export default Pai;