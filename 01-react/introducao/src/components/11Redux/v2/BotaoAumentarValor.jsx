import { useDispatch } from "react-redux";
import { aumentarValor } from "./slices/idSlice";

const BotaoAumentarValor = () => {
    const dispatch = useDispatch();
    let valor = 10;
    return(
        <button onClick={() => dispatch(aumentarValor(valor))}>
            ID + {valor}
        </button>
    );
}

export default BotaoAumentarValor;