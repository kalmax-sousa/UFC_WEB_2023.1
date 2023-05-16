import './App.css'
import Questao01X from './components/Questao01'
import Questao02 from './components/Questao02'
import Questao03 from './components/Questao03'

function App() {

  return (
    <div className='flex flex-col gap-5'>
      <Questao01X/>
      <Questao02/>
      <Questao03/>
    </div>
  )
}

export default App
