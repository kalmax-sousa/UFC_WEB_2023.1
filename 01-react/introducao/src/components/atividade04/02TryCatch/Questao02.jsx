import { useEffect, useState } from "react";

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const meuInt = Math.floor(Math.random() * 10) + 1;
            
            if(meuInt > 2){
                resolve([
                    {id: 1, nome: 'Beltrano', ira: 6.7},
                    {id: 2, nome: 'Fulano', ira: 8.3},
                    {id: 3, nome: 'Sicrano', ira: 5.2},
                    {id: 4, nome: 'Kalmax', ira: 9.33}
                ]);
            } else {
                reject({num: meuInt, msg: meuInt === 1 ? "ERRO DE CONEXÃO" : "ERRO DE DADOS INVÁLIDOS"});
            }
            console.log(meuInt)
        }, 3000);

    }
);

const Questao02 = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const tratarPromise = async () => {
            try{
                const obj = await myPromise;
                setArray(obj);
            } catch(error) {
                alert(`Número: ${error.num}, ${error.msg}`)
            }
        }

        tratarPromise();
    }, [])

    return(
        <>
            {array.map(e => <h3 key={e.id}>{e.nome}, IRA: {e.ira}</h3>)}
        </>
    );
}

export default Questao02;