const { useEffect } = require("react");


const MeuAsync = () => {

    const meuGet = async () => {
        const minhaPromise = new Promise(
            async (resolve, reject) => {
        
                setTimeout(() => {
                    //console.log("lógica terminada");
                    const meuInt = Math.floor(Math.random() * 10) + 1;
                    //console.log(meuInt);
                    meuInt % 2 === 0 ? resolve({numero: meuInt, msg: "Deu tudo certo"}) : reject({numero: meuInt, msg: "Deu tudo errado"});
                }, 3000);
            }
        );
    
    
        try{
            const response = await minhaPromise;
            return response;
        } catch(err){
            return(err);
        }
    }

    useEffect(() => {
        console.log("Início...");

        const funcao = async ()  => {
            await meuGet()
                .then(res => console.log(res.numero, res.msg))
                .catch(err => console.log(err.numero, err.msg));

                console.log("Fim...");
        }

        funcao();

    }, []);

    return(
        <>
        </>
    );
}

export default MeuAsync;