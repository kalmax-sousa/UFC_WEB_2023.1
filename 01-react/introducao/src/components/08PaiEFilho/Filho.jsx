const Filho = ({msg}) => {
    const acaoBotao = () =>{
        msg("Oi pai");
    }
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={acaoBotao}>Enviar mensagem pro pai</button>
        </div>
    );
}

export default Filho;