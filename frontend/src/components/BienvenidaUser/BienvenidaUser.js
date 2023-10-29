import React from 'react'; // Agrega esta línea
import styles from './BienvenidaUser.module.css';
import { useContext } from 'react';
import { UserContext } from '../../App';

function BienvenidaUser() {
    const usuario = useContext(UserContext);

    return (
        <div className={styles.centered} >
            <h1>Bienvenido {usuario.nombre} {usuario.apellido}</h1>
            <h2>Usuario {usuario.tipoUsuario}</h2>
        </div>
    );
}

export default BienvenidaUser;