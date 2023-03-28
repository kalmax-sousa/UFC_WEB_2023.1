import { useContext } from "react";
import CorContexto from "./MyContext";

const FuncaoB = () => {
    const {cor} = useContext(CorContexto);
    return(
        <div>
            <h3 style={{backgroundColor: cor}}>Função B</h3>
        </div>
    );
}

export default FuncaoB;