import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { Sesion } from "../model";

export const Ingresar = () => {
  // PublicLayout es padre de Ingresar
  const { usuario, iniciarSesion } = useOutletContext<Sesion>();
  // Cambia la ruta sin recargar la aplicacion
  const navegar = useNavigate();

  function ingresar() {
    iniciarSesion();
    navegar("/");
  }

  return (
    <section>
      <h1>Iniciar Sesion</h1>
      <p>Demostración Local</p>
      {usuario ? (
        <Link to="/">Volver al inicio</Link>
      ) : (
        <button type="button" onClick={ingresar}>
          Entrar como Joe Doe
        </button>
      )}
    </section>
  );
};

export default Ingresar;