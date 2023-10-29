import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext} from '../../App';

function AceptarCita() {
    const [citas, setCitas] = useState([]);
    const [doctores, setDoctores] = useState(['Luis', 'Diego']); // Opciones de doctores
    const [selectedDoctors, setSelectedDoctors] = useState([]);

    // Lógica para obtener las citas desde el backend
    const getCitas = async () => {
        try {
            const response = await fetch('http://localhost:4000/paciente/obtenerCitas');
            const data = await response.json();
            // Inicializamos el array de doctores seleccionados con valores por defecto
            const initialSelectedDoctors = new Array(data.citas.length).fill('');
            setSelectedDoctors(initialSelectedDoctors);
            setCitas(data.citas);
        } catch (error) {
            console.error('Error al obtener las citas:', error);
        }
    };

    useEffect(() => {
        getCitas();
    }, []);
    const verCitas = () => {
        alert(JSON.stringify(citas, null, 9)); // Muestra los datos en una ventana emergente
    };

    const handleAceptarCita = (index) => {
        const selectedDoctor = selectedDoctors[index];
        if (selectedDoctor) {
            const updatedCitas = [...citas];
            console.log(updatedCitas);
            updatedCitas[index].doctor = selectedDoctor; // Guardar el doctor seleccionado
            updatedCitas[index].estado = 'Aceptada'; // Cambiar el estado de la cita a 'Aceptada'
            setCitas(updatedCitas);
        } else {
            alert('Selecciona un doctor antes de aceptar la cita.');
        }
    };

    // Manejador de eventos para rechazar una cita
    const handleRechazarCita = (index) => {
        const updatedCitas = [...citas];
        updatedCitas[index].estado = 'Rechazada'; // Cambiar el estado de la cita a 'Rechazada'
        setCitas(updatedCitas);
    };

    // Manejador de eventos para seleccionar un doctor en el combobox
    const handleSelectDoctor = (index, doctor) => {
        const updatedSelectedDoctors = [...selectedDoctors];
        updatedSelectedDoctors[index] = doctor;
        setSelectedDoctors(updatedSelectedDoctors);
    };

    return (
        <div>
            <h2>Listado de citas pendientes</h2>
            <button onClick={verCitas}>Ver Citas</button> {/* Botón para ver las citas */}

            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Motivo</th>
                        <th>Doctor</th>
                        <th>Estado</th> {/* Nueva columna para mostrar el estado */}
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((cita, index) => (
                        <tr key={index}>
                            <td>{cita.fecha}</td>
                            <td>{cita.hora}</td>
                            <td>{cita.motivo}</td>
                            <td>
                                <select
                                    value={selectedDoctors[index]}
                                    onChange={(e) => handleSelectDoctor(index, e.target.value)}
                                >
                                    <option value="">Seleccione un Doctor</option>
                                    {doctores.map((doctor, doctorIndex) => (
                                        <option key={doctorIndex} value={doctor}>
                                            {doctor}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>{cita.estado}</td> {/* Muestra el estado de la cita */}
                            <td>
                                <button className="aceptar-button" onClick={() => handleAceptarCita(index)}>
                                    Aceptar
                                </button>
                            </td>
                            <td>
                                <button className="rechazar-button" onClick={() => handleRechazarCita(index)}>
                                    Rechazar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default AceptarCita;