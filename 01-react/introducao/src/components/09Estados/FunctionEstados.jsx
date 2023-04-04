import { useEffect, useState } from "react";

const FuncitonEstados = () => {

    const [count, setCount] = useState(0);
    const [ehPar, setEhPar] = useState(true);

    
    const acaoBotao = () => {
        setCount(count+1);
    }

    useEffect(() => {
        count % 2 === 0 ? setEhPar(true) : setEhPar(false);
    }, [count]);

    return(
        <>
            <h2>Contador: {count}</h2>
            <h2>É par: {`${ehPar}`}</h2>
            <button onClick={acaoBotao}>Aumentar Contador</button>
        </>
    );
}

export default FuncitonEstados;