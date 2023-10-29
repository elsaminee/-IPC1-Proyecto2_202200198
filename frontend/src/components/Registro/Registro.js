import styles from './Registro.module.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Registro(props) {
    const { v4: uuidv4 } = require('uuid');
    const handleIngresar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const nombre = formData.get('uNombreR');
        const apellido = formData.get('uApellido');
        const userName = formData.get('uUserName');
        const fechaNacimiento = formData.get('uFechaNacimiento');
        const genero = formData.get('uGenero');
        const password = formData.get('uPassword');
    
        if (!nombre || !apellido || !userName || !fechaNacimiento || !genero || !password) {
            alert("Por favor, complete todos los campos con un asterisco marcado");
            return;
        }

        const response = await fetch('http://localhost:4000/auth/registro', {
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
            alert("Usuario registrado con exito");
            window.location.href = "http://localhost:3000";
        }


    }

    return (
        <div>
            <form onSubmit={handleIngresar} className={styles.formContainer} encType="multipart/form-data">
                <div>
                    <label htmlFor='nombre' className={styles.label}>Nombre*: </label>
                    <input type="text" id="nombre" name="uNombreR" placeholder="Nombre"></input>
                </div>
                <div>
                    <label htmlFor='apellidoUsuario' className={styles.label}>Apellido*: </label>
                    <input type="text" id="apellidoUsuario" name="uApellido" placeholder="Apellido"></input>
                </div>
                <div>
                    <label htmlFor='nUsuario' className={styles.label}>Usuario*: </label>
                    <input type="text" id="nUsuario" name="uUserName" placeholder="Usuario"></input>
                </div>
                <div>
                    <label htmlFor='born' className={styles.label}>Fecha de Nacimiento*: </label>
                    <input type="text" id="born" name="uFechaNacimiento" placeholder="dd-mm-YYYY"></input>
                </div>
                <div>
                    <label htmlFor='sexo' className={styles.label}>Genero*: </label>
                    <input type="text" id="sexo" name="uGenero" placeholder="Escribrir M/F"></input>
                </div>
                <div>
                    <label htmlFor='contrasenia' className={styles.label}>Contraseña*: </label>
                    <input type="password" id="contrasenia" name="uPassword" placeholder="******"></input>
                </div>
                <div>
                    <label htmlFor='tel' className={styles.label}>Telefono: </label>
                    <input type="text" id="tel" name="uTelefono" placeholder="11111111"></input>
                </div>
                <div className={styles.contenedor}>
                    <button type="submit" className={styles.botonIngresar}>Registrar Usuario</button>
                    <ul className={styles.ulestilo}>
                        <li className={styles.liestilo}>
                            <Link to="http://localhost:3000">Regresar</Link>
                        </li>

                    </ul>

                </div>
            </form>
        </div>

    )
}

export default Registro;