import { Children, cloneElement } from "react";

/*V0
const Supermercado = ({children}) => {
    return(
        <div>
            <h1>Supermercado DuPovo</h1>
            {children.map(e => <div style={{backgroundColor: "blue"}}>
                    {e}
                </div>
            )}
        </div>
    );
}*/

/*V1
const Supermercado = ({children}) => {
    return(
        <div>
            <h1>Supermercado DuPovo</h1>
            {
                Children.map(
                    children, 
                    child => <div style={{backgroundColor: "red"}}>
                        {child}
                    </div>
                )
            }
        </div>
    );
}*/

//V2
const Supermercado = ({children, nome}) => {
    return(
        <div>
            <h1>Supermercado {nome}</h1>
            {
                Children.map(
                    children, 
                    child => cloneElement(child, {supermercado: nome})
                )
            }
        </div>
    );
}

const Legume = ({nome, supermercado}) => {
    return(
        <div>
            <h1>{nome} no Supermercado {supermercado}</h1>
        </div>
    );
}

const Fruta = ({nome, supermercado}) => {
    return(
        <div>
            <h1>{nome} no Supermercado {supermercado}</h1>
        </div>
    );
}

const Bebida = ({nome, supermercado}) => {
    return(
        <div>
            <h1>{nome} no Supermercado {supermercado}</h1>
        </div>
    );
}

export {Supermercado, Legume, Fruta, Bebida}