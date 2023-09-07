import { useRef, useState } from 'react';
import './App.css';
import suma from './utils/suma';

function App() {

  const num = useRef();
  const [ nums, setNums ] = useState([]);
  const [ resultado, setResultado ] = useState(0);

  const handleClick = () => {
    if (!!num.current) {
      if (!!num.current.value) {
        const val = Number(num.current.value);
        setNums( p => [...p, val]);
        num.current.value = "";
        num.current.focus();
      }
    }
  }

  const handleSumaClick = () => setResultado(suma(nums));

  const handleResetClick = () => {
    setNums([]);
    setResultado(0);
    num.current.value = "";
    num.current.focus();
  };

  return (
    <div className="App">
      <div>
        <p>Números agregados</p>
        { nums.map( (n, p) => <span key={`num-agregado-${p}`}> {n} </span>) }
      </div>
      <input placeholder='agrega un número' ref={num} />
      <button onClick={handleClick}> agregar </button>
      <button onClick={handleSumaClick}> sumar </button>
      <h1> El resultado es: { resultado } </h1>
      <button onClick={handleResetClick}> limpiar </button>
    </div>
  );
}

export default App;
