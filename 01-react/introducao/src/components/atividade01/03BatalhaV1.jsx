import Joker from './assets/joker.jpg';
import Deadpool from './assets/deadpool.jpg';
import './style.css';

const Hero = ({name, img}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="imagem de Heroi"/>
        </div>
    );
}

const Enemy = ({name, img}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} alt="imagem de inimigo"/>
        </div>
    );
}

export const Arena = () => {
    return(
        <div>
            <Hero name="Deadpool" img={Deadpool}/>
            <br/>
            <Enemy name="Coringa" img={Joker}/>
            <br/>
        </div>
    );
}

export const World = ({children}) => {
    return(
        <>{children}</>
    );
}