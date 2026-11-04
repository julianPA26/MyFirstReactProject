import React from 'react';

import type { Usuario } from "./model";
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import Inicio from './pages/Inicio';
import { Acerca } from './pages/Acerca';
import Ingresar from './pages/Ingresar';
import "../src/App.css"

const App = () => {
  //Guardar un usario que inicio sesion 
  // El usuario inicia vacio (null)=> nadie ha iniciado sesion
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  return (
    <Routes >
      <Route
        element=
        {<PublicLayout usuario={usuario}
          iniciarSesion={() => setUsuario({ nombre: "Joe Doe" })}
          cerrarSesion={() => setUsuario(null)}
        />
        }>
        <Route index element={<Inicio />} />
        <Route path="about" element={<Acerca />} />
        <Route path="sign-in" element={<Ingresar />} />


      </Route>
    </Routes>
  );
};

export default App

