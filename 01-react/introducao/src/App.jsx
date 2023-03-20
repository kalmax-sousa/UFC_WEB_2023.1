//import MeusDados from './components/atividade00/01MeusDados';
import './styles.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
//import MyProps from './components/02MyProps';

// ATIVIDADE 00
import MeusDados01 from './components/atividade00/01MeusDados';
import MeusDados02 from './components/atividade00/02MeusDados';
import Temperatura from './components/atividade00/03Temperatura';


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

      {/* ATIVIDADE 00 */}
      <MeusDados01/>
      <MeusDados02 nome="Kalmax" curso="Sistemas de Informação" universidade="UFC"/>
      <Temperatura/>
    </div>
  );
}

export default App;
