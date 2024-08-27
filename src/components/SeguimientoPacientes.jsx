import React from 'react'
import { useState, useEffect } from "react";

import Formulario from "./Formulario";
import Header from "./Header";
import ListadoPacientes from "./ListadoPacientes";


const seguimientoPacientes = () => {
    const[pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || []);
    const [paciente, setPaciente] = useState({});
  
  
    useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }, [pacientes]);
  
    const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados);
    };
  
    return (
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} />
          <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
        </div>
      </div>
    );
}

export default seguimientoPacientes