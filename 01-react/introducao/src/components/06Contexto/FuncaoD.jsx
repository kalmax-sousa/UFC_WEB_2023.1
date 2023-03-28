import CorContexto from "./MyContext";

const FuncaoD = () => {
    return(
        <CorContexto.Consumer>
            { ({cor2, nome}) => (
                <div>
                    <h3 style={{backgroundColor: cor2}}>Função D de {nome}</h3>
                </div>
            )}
        </CorContexto.Consumer>
    );
}

export default FuncaoD;