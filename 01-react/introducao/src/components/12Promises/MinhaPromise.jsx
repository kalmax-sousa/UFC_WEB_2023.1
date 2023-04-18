const { useEffect } = require("react");

const minhaPromise = new Promise(
    (resolve, reject) => {
        console.log("iniciando a lógica");

        setTimeout(() => {
            //console.log("lógica terminada");
            const meuInt = Math.floor(Math.random() * 10) + 1;
            //console.log(meuInt);
            meuInt % 2 === 0 ? resolve({numero: meuInt, msg: "Deu tudo certo"}) : reject({numero: meuInt, msg: "Deu tudo errado"});
        }, 3000);
    }
);

const meuGet = () => {
    return minhaPromise;
}

const MinhaPromise = () => {
    useEffect(() => {
        meuGet()
            .then(res => console.log(res.numero, res.msg))
            .catch(err => console.log(err.numero, err.msg))
    }, []);
    return(
        <>
        </>
    );
}

export default MinhaPromise;