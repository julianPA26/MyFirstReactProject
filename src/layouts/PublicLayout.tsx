import React from 'react'
import {Navbar} from "../components/navbar/Navbar"
import { Sesion } from '../model'
import { Outlet } from 'react-router-dom';
import {Footer} from '../components/Footer/Footer';

export const PublicLayout = ({usuario, iniciarSesion, cerrarSesion, cambiarContrasenia, registro}: Sesion) => {
  return (
    <div className="sitio">
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion}/>
      <main id="contenido" className="contenido">
        <p>
          {usuario 
            ? `Sesion activa: ${usuario.nombre}`
            : "Visitante sin sesion"
          }
        </p>
        {/* Renderiza la pagina segun indicacion de react-router-dom */}
        <Outlet 
          context={
            { 
              usuario, 
              iniciarSesion, 
              cerrarSesion, 
              cambiarContrasenia,
              registro
            } satisfies Sesion
          }/>        
      </main>
      <Footer/>
    </div>
  );
};
