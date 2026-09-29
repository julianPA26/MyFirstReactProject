import React, { useState } from 'react'

const Saludo = () => {
const [NombreP, setNombreP]= useState("");
const [mostrarSaludo, setMostrarSaludo]= useState(false);

const handleAceptar= ()=>{
    setMostrarSaludo(true);
}

  return (

    <section>
    <label htmlFor="nombre">Nombre:</label>
    <input 
      type="text" 
      id="nombre" 
      value={nombreP}
      onChange ={(event)=> setNombreP(event.target.value)}
    />

    <button onClick={handleAceptar}>Aceptar</button>
    {mostrarSaludo &&<h1>Hola, {nombreP || "Invitado"}</h1>} 
    </section>              
  );
};

export default Saludo
