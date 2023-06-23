import './App.css';
import freeCodeCampLogo from './imagenes/freecodecampblanco.png'
import Boton from './componentes/Botones-calculadora'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {
  const [input, setInput]=useState('')

  const agregarInput = val =>{
    if(input ==='Delete'){
      setInput('')
    }
    else
      setInput(input + val)
    
  }
  const quitarInput = val=>{
    setInput(val)
  }
  const calcularResultado =()=>{
    if(input === '' || input === 'Delete'){
      setInput('')
    }
    else
      setInput(evaluate(input)) 
      
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src= {freeCodeCampLogo}
          alt="logo de freecodecamp" 
          className='freecodecamp-logo'
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla recibir={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear borrarDatos={quitarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
