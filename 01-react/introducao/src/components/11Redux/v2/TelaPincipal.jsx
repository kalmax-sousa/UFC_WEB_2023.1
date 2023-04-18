import { useSelector } from "react-redux";
import BotaoAumentarValor from "./BotaoAumentarValor";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoDiminuirValor from "./BotaoDiminuirValor";
import BotaoIncrementar from "./BotaoIncrementar";
import Imagem from "./Imagem";
import { useEffect, useState } from "react";
import axios from 'axios';

const TelaPincipal = () => {
    const id = useSelector(state => state.id.value);
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setNome(res.data.name);
                setImagem(res.data.sprites.front_default);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    const renderizarImagem = () => {
        if(loading)
            return(
                <h3>Carregado...</h3>
            );

        return(
            <Imagem name={nome} img={imagem} />
        );
    }

    return(
        <table>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        {renderizarImagem()}
                    </td>
                </tr>
                <tr>
                    <td>
                        <BotaoIncrementar/>
                        <BotaoAumentarValor />
                    </td>
                    <td>
                        <BotaoDecrementar/>
                        <BotaoDiminuirValor />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TelaPincipal;