import {useState} from 'react'
import Header from './components/header'
import Listado from './components/listado'

function App() {
  let [stock, setStock] = useState(0)
  function sumar(){
    setStock(stock + 1)
  }
  return (
    <div className="App">
      <Header prop={stock}/>
      <Listado sumar={sumar} />
    </div>
  );
}

export default App;
