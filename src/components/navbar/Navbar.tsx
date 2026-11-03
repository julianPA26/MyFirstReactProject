import { NavLink } from "react-router-dom";
import type { Sesion } from "../../model";

export const Navbar = ({
  usuario,
  cerrarSesion,
}: Pick<Sesion, "usuario" | "cerrarSesion">) => {
  return (
    <header className="cabecera">
      <nav aria-label="Navgeacion principal">
        <strong>Taquilla</strong>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/">Acerca de</NavLink>
        {usuario ? (
          <>
            <span> Hola, {usuario.nombre}</span>
            <button type="button" onClick={cerrarSesion}>
              Cerrar Sesion
            </button>
          </>

        ) : (
          <NavLink to="/sign-in">Iniciar Sesion</NavLink>
        )}

      </nav>
    </header>
  )
};

export default Navbar;
