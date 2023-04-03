import './styles.css';
//import HelloWorld from './components/00HelloWorld/HelloWorld';
//import Calculadora from './components/01Calculadora/Calculadora';
//import MyProps from './components/02MyProps/MyProps';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import {Header, Body, Footer} from './components/04MultiploComponente/MultiploComponente';
//import {Supermercado, Legume, Fruta, Bebida} from './components/05Children/MyChildrenV0';
//import FuncaoA from './components/06Contexto/FuncaoA';


// ATIVIDADE 00
//import MeusDados01 from './components/atividade00/01MeusDados';
//import MeusDados02 from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';

// ATIVIDADE 01
//import Pai from './components/atividade01/01/Pai';
//import * as PC from './components/atividade01/02MeuPC';
//import { Arena, World } from './components/atividade01/03BatalhaV1';
//import { Arena as Arena2, World as World2, Hero, Enemy } from './components/atividade01/03BatalhaV2';
//import Joker from './components/atividade01/assets/joker.jpg'
//import Deadpool from './components/atividade01/assets/deadpool.jpg'

// ATIVIDADE 02
import FunctionContextA from './components/atividade02/01Context/FunctionContextA';
import ComponenteAvo from './components/atividade02/02Pokemon/ComponenteAvo';
import ComponenteAvoCounter from './components/atividade02/03PokemonContador/ComponenteAvo';


function App() {
  return (
    <div className='primeiraAula'>
      {/*<HelloWorld/> */}
      {/*<Calculadora/> */}
      {/*<MyProps 
        nome="Kalmax Sousa" 
        idade={18} 
        curso="Sistemas de  Informação"
      />*/}
      {/*<FunctionA />*/}
      {/*<div>
        <Header />
        <Body />
        <Footer />
      </div>*/}
      {/*<Supermercado nome="Pinheiro">
        <Legume nome="Cenoura"/>
        <Fruta nome="Uva"/>
        <Bebida nome="Água"/>
    </Supermercado>
    <FuncaoA/>*/}

      {/* ATIVIDADE 00 
      <MeusDados01/>
      <MeusDados02 nome="Kalmax" curso="Sistemas de Informação" universidade="UFC"/>
      <Temperatura/>*/}

      {/* ATIVIDADE 01
      <Pai/>
      <br/>
      <PC.PlacaMae nome="Gigabyte" preco="R$1399,99"/>
      <PC.Memoria nome="Kingston" preco="R$300,00"/>
      <PC.PlacaDeVideo nome="NVID1A" preco="R$2599,00"/>
      <br/>
      <World>
        <Arena/>
      </World>

      <World2>
        <Arena2 arena={1}>
          <Hero name="Deadpool" img={Deadpool}/>
          <Enemy name="Coringa" img={Joker}/>
        </Arena2>

        <Arena2 arena={2}>
          <Hero name="Deadpool" img={Deadpool}/>
          <Enemy name="Coringa" img={Joker}/>
        </Arena2>

        <Arena2 arena={3}>
          <Hero name="Deadpool" img={Deadpool}/>
          <Enemy name="Coringa" img={Joker}/>
        </Arena2>
      </World2>*/}

      {/* ATIVIDADE 02 */}
      <FunctionContextA/>
      <hr/>
      <ComponenteAvo/>
      <hr/>
      <ComponenteAvoCounter/>


    </div>
  );
}

export default App;
