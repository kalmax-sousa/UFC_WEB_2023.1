import { useState } from "react";
import './style.css';

const Pai = () => {
    const [maior, setMaior] = useState();
    const [menor, setMenor] = useState();
    const [media, setMedia] = useState();
    const vet = [1, 2, 3, 4, 5];

    return(
        <div>
            <div>
                <h3>Maior: {maior}</h3>
                <h3>Menor: {menor}</h3>
                <h3>Média: {media}</h3>
            </div>
            <div className="button-group">
                <FilhoA vet={vet} func={setMaior}/>
                <FilhoB vet={vet} func={setMenor}/>
                <FilhoC vet={vet} func={setMedia}/>
            </div>
        </div>
    );
}

const FilhoA = ({vet, func}) => {
    return(
        <button className="button" onClick={() => func(Math.max(...vet))}>Calcular Maior</button>
    );
}

const FilhoB = ({vet, func}) => {
    return(
        <button className="button" onClick={() => func(Math.min(...vet))}>Calcular Menor</button>
    );
}

const FilhoC = ({vet, func}) => {
    return(
        <button className="button" onClick={() => func((vet[0]+vet[1]+vet[2]+vet[3]+vet[4])/5)}>Calcular Média</button>
    );
}

export default Pai;