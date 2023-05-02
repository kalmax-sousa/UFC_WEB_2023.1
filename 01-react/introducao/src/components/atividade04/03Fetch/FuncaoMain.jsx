import ContextPais from "./ContextPais";
import PegaPais from "./PegaPais";

const FuncaoMain = () => {

    return(
        <ContextPais.Provider value="france">
            <PegaPais />
        </ContextPais.Provider>
    )
}

export default FuncaoMain;