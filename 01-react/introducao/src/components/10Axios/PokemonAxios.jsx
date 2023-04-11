import { useEffect, useState } from "react";
import axios from 'axios';
import './style.css';

const PokemonAxios = () => {

    const [id, setId] = useState(1);
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [imagem2, setImagem2] = useState("");

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setNome(res.data.name);
                setImagem(res.data.sprites.front_default)
                setImagem2(res.data.sprites.back_default)
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="main">
            <h3>{nome}</h3>
            <div>
                <img src={imagem} alt={nome} style={{width: 400}}/>
                <img src={imagem2} alt={nome} style={{width: 400}}/>
            </div>
            <div className="button-group">
                <button className="button" onClick={() => setId(prev => prev-1)}>Anterior</button>
                <button className="button" onClick={() => setId(prev => prev+1)}>Próximo</button>
            </div>
        </div>
    );
}

export default PokemonAxios