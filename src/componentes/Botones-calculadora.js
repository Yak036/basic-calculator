import React from "react";
import '../hojas-de-estilo/boton.css'
function Boton(props){
  const esOperador = valor =>{
    // eslint-disable-next-line eqeqeq
    return isNaN(valor) && (valor != '.') && (valor != '=')
  };
  return(
    <div className={`boton-contenedor ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}
    onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;