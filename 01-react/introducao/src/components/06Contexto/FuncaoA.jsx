import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";
import CorContexto from "./MyContext";

const FuncaoA = () => {
    const cor = "red";
    
    return(
        <CorContexto.Provider value={{cor, nome: "Kalmax", cor2: "green"}}>
            <div>
                <h3>Função A</h3>
                <FuncaoB/>
                <FuncaoC/>
            </div>
        </CorContexto.Provider>
    );
}

export default FuncaoA;