/*const MyProps = (props) => {

    const renderizarMeuNome = () => {
        return <span>Kalmax</span>;
    }
    return (
        <div>
            <h1>Meu nome é: {renderizarMeuNome()}</h1>
            <h1>Meu nome , com props, é: {props.nome}</h1>
        </div>
    );
}*/

/*const MyProps = (props) => {
    const {nome, idade, curso} = props;
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Minha idade é: {idade}</h1>
            <h1>Curso: {curso}</h1>
        </div>
    );

}*/

const MyProps = ({nome, idade, curso}) => {
    return (
        <div>
            <h1>Meu nome é: {nome}</h1>
            <h1>Minha idade é: {idade}</h1>
            <h1>Curso: {curso}</h1>
        </div>
    );
}

export default MyProps;