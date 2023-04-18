import { useSelector } from "react-redux";

const Imagem = ({name, img}) => {
    const id = useSelector(state => state.id.value);
    return(
        <>
            <h1>ID: {id}</h1>
            <h1>Nome: {name}</h1>
            <img 
                src={img} 
                alt="pokemon"
                style={{width: '300px'}}
            />
        </>
    );
}

export default Imagem;