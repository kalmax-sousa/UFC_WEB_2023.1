import { useEffect, useState } from "react";
import './style.css';

const Cidade = () => {
    const [cidades, setCidades] = useState([{nome: "Quixeramobim", votos: 0},
            {nome: "Quixadá", votos: 0},
            {nome: "Senador Pompeu", votos: 0},
            {nome: "Fortaleza", votos: 0}]);

    const [maiorVoto, setMaiorVoto] = useState(0);
    const [menorVoto, setMenorVoto] = useState(0);
    
    useEffect(() => {
        const aux = cidades.map(e => e.votos)
        setMaiorVoto(Math.max(...aux));
        setMenorVoto(Math.min(...aux));
    }, [cidades]);

    const addVotos = (nome, votos) => {
        setCidades(cidades.map(e => (
            e.nome === nome
                ? {...e, votos: votos}
                : {...e}
        )));
    }

    return(
        <div className="main">
            <div className="city_group">
                {cidades.map((e, index) => (
                    <div key={index} className="city">
                        <h3>{e.nome}: {e.votos}</h3>
                        <button 
                            className="button_add"
                            onClick={() => addVotos(e.nome, cidades[index].votos+1)}
                        >
                            {e.nome} + 1
                        </button>
                    </div>
                ))}
            </div>

            

            <div className="info_group">
                <div>
                    <h3>Mais votada:</h3> 
                    {cidades.filter(e => e.votos === maiorVoto).map(e => <p key={e.nome}>{e.nome}</p> )}
                </div>
                <div>
                    <h3>Menos votada:</h3>
                    {cidades.filter(e => e.votos === menorVoto).map(e => <p key={e.nome}>{e.nome}</p>)}
                </div>
            </div>
        </div>
    );
}

export default Cidade;