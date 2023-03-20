const Calculadora = () => {
    
    const somar = (x, y) => x+y;
    
    const subtrair = (x, y) => x-y;
    
    const multiplicar = (x, y) => x*y;
    
    const dividir = (x, y) => x/y;

    const chamarDivisao = (funcao) => {
        return funcao(30,5);
    }
    
    return(
        <div>
            <h2>O resultado da soma é {somar(30, 6)}</h2>
            <h2>O resultado da subtração é {subtrair(30, 6)}</h2>
            <h2>O resultado da multiplicação é {multiplicar(30, 6)}</h2>
            <h2>O resultado da divisao é {chamarDivisao(dividir)}</h2>
            <h2>O resultado da divisão é {chamarDivisao((x, y) => x/y)}</h2>
        </div>
    )
}

export default Calculadora;