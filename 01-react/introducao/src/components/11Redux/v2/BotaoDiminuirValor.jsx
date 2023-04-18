import { useDispatch } from "react-redux";
import { diminuirValor } from "./slices/idSlice";

const BotaoDiminuirValor = () => {
    const dispatch = useDispatch();
    let valor = 10;
    return(
        <button onClick={() => dispatch(diminuirValor(valor))}>
            ID - {valor}
        </button>
    );
}

export default BotaoDiminuirValor;