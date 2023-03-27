import './styles.css';
//import HelloWorld from './components/00HelloWorld/HelloWorld';
//import Calculadora from './components/01Calculadora/Calculadora';
//import MyProps from './components/02MyProps/MyProps';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import {Header, Body, Footer} from './components/04MultiploComponente/MultiploComponente';
import {Supermercado, Legume, Fruta, Bebida} from './components/05Children/MyChildrenV0';


// ATIVIDADE 00
//import MeusDados01 from './components/atividade00/01MeusDados';
//import MeusDados02 from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';


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

      <Supermercado nome="Pinheiro">
        <Legume nome="Cenoura"/>
        <Fruta nome="Uva"/>
        <Bebida nome="Água"/>
      </Supermercado>

      {/* ATIVIDADE 00 
      <MeusDados01/>
      <MeusDados02 nome="Kalmax" curso="Sistemas de Informação" universidade="UFC"/>
      <Temperatura/>*/}


    </div>
  );
}

export default App;
