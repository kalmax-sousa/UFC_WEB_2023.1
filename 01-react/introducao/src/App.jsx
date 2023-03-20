import './styles.css';
//import HelloWorld from './components/00HelloWorld';
//import Calculadora from './components/01Calculadora';
import MyProps from './components/02MyProps';

function App() {
  return (
    <div className='primeiraAula'>
      {/*<HelloWorld/> */}
      {/*<Calculadora/> */}
      <MyProps 
        nome="Kalmax Sousa" 
        idade={18} 
        curso="Sistemas de  Informação"
      />
    </div>
  );
}

export default App;
