import styles from './SolicitarCitas.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';



function SolicitarCitas() {

    const navigate = useNavigate();
    const usuario = useContext(UserContext);
    const [citasPaciente, setCitasPaciente] = useState([]);

    const handleIngresar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch('http://localhost:4000/paciente/citas', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'
            },
            body: formData

        })
        const data = await response.json();

        if (response.status !== 200) {
            alert(data.error);
            return;
        }
        if (response.status === 200) {
            alert("Cita solicitada con éxito");
            navigate('/paciente')
        }

    }

    useEffect(() => {
        const fetchCitas = async () => {
            const response = await fetch('http://localhost:4000/paciente/citasPaciente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ paciente: usuario.id })

            });
            const data = await response.json();
            setCitasPaciente(data.citas);
        }
        fetchCitas();

    }, []);
    console.log(usuario.id);
    return (
        <div>
            <h1 className={styles.centrado}>Solicitar Citas</h1>
            <div className={styles.centeredContainer}>
                <form onSubmit={handleIngresar} className={styles.formContainer} encType="multipart/form-data">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Fecha:
                                    <input type="date" id="fecha" name="fecha" placeholder="Fecha"></input>
                                </td>
                                <td className={styles.margenizquierdo}>
                                    Hora:
                                    <input type="time" id="hora" name="hora" placeholder="Hora"></input>
                                </td>
                            </tr>
                            {/* Campo oculto para UserActual */}
                            <input type="hidden" name="idPaciente" value={usuario.id} />
                            <input type="hidden" name="estado" value="PENDIENTE" />
                        </tbody>
                        <div className={styles.margenArriba}>
                            Motivo:
                        </div>
                        <div>
                            <input type='text' id='motivo' name='motivo' placeholder='Motivo' className={styles.sizeinput}></input>
                        </div>
                        <div>
                            <button type="submit" className={styles.btndesing}>Solicitar</button>
                        </div>

                    </table>
                </form>
            </div>
            <div id="contenedor" className={styles.centradoTabla}>
                <h2 className={styles.centrado}>Datos de citas de paciente:</h2>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>Fecha</th>
                            <th className={styles.tableCell}>Hora</th>
                            <th className={styles.tableCell}>Motivo</th>
                            <th className={styles.tableCell}>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citasPaciente.map(cita => (
                            <tr key={cita.id}>
                                <td className={styles.tableCell}>{cita.fecha}</td>
                                <td className={styles.tableCell}>{cita.hora}</td>
                                <td className={styles.tableCell}>{cita.motivo}</td>
                                <td className={styles.tableCell}>{cita.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SolicitarCitas;

