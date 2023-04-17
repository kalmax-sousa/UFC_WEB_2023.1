import { useState } from "react";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementar from "./BotaoIncrementar";
import Imagem from "./Imagem";

const TelaPincipal = () => {
    
    const [id, setId] = useState(100);

    const incrementar = () => setId(prev => prev+1);
    const decrementar = () => setId(prev => prev-1);

    return(
        <table>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <Imagem id={id} />
                    </td>
                </tr>
                <tr>
                    <td><BotaoIncrementar onClick={incrementar}/></td>
                    <td><BotaoDecrementar onClick={decrementar}/></td>
                </tr>
            </tbody>
        </table>
    );
}

export default TelaPincipal;