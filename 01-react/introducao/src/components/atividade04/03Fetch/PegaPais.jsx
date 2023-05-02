import { useContext, useEffect, useState } from "react";
import ContextPais from "./ContextPais";

const PegaPais = () => {
    const value = useContext(ContextPais);
    const [population, setPopulation] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then(async res => {
                const temp = await res.json()
                setPopulation(temp[0].population)
            })
            .catch(err => alert("População não encontrada, tente novamente mais tarde", err));
    }, [value])

    return(
        <>
            {population && <h3>A população de {value} é {population}</h3>}
        </>
    );
}

export default PegaPais;