import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import UserLayout from './components/UserLayout/UserLayout';
import ModificarPerfil from './components/ModificarPerfil/ModificarPerfil';
import BienvenidaUser from './components/BienvenidaUser/BienvenidaUser';
import SolicitarCitas from './components/SolicitarCitas/SolicitarCitas';
import Registro from './components/Registro/Registro';
import CompraMedicamento from './components/CompraMedicamento/CompraMedicamento';
import AceptarCitas from './components/AceptarCitas/AceptarCitas';


export const UserContext = React.createContext();

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <UserContext.Provider value={usuario}>
      <Routes>

      //Rutas de Autenticación
        <Route path="/" element={<Login setUsuario={setUsuario} />} />
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />

      //AGREGAR RUTA REGISTRO
        <Route path="/registro" element={<Registro />} />

      //RUTAS DE LOS USUARIOS DE TIPO PACIENTE
        <Route path="/paciente" element={<UserLayout />} >
          <Route index element={<BienvenidaUser />} />
          <Route path="modificarPerfil" element={<ModificarPerfil />} />
          <Route path="citas" element={<SolicitarCitas />} />
          <Route path="medicamento" element={<CompraMedicamento />} />
        </Route>

      //COMPONENTES HIJOS

        // Rutas de los usuarios de tipo enfermera

        <Route path="/enfermera" element={<UserLayout />}>
          <Route index element={<BienvenidaUser />} />
          <Route path="citas" element={<AceptarCitas />} />
        </Route>
        // Rutas de los usuarios de tipo doctor

        <Route path="/doctor" element={<UserLayout />}>
          <Route index element={<BienvenidaUser />} />
          
        </Route>

      </Routes>
    </UserContext.Provider>


  );
}

export default App;