import styles from './ModificarPerfil.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext} from '../../App';

function ModificarPerfil(props) {
    const usuario = useContext(UserContext);
    const handleIngresar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch('http://localhost:4000/paciente/modificarPerfil', {
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
            alert("Usuario modificado con exito");
            window.location.href = "http://localhost:3000";
        }
    }


    return (
        <div>
            <h1 className={styles.centrado}>Modificar Datos Paciente</h1>
            <form onSubmit={handleIngresar} className={styles.formContainer} encType="multipart/form-data">
                <div>
                    <label htmlFor='nombre' className={styles.label}>Nombre: </label>
                    <input type="text" id="nombre" name="uNombreR" placeholder="Nombre"></input>
                </div>
                <div>
                    <label htmlFor='apellidoUsuario' className={styles.label}>Apellido: </label>
                    <input type="text" id="apellidoUsuario" name="uApellido" placeholder="Apellido"></input>
                </div>
                <div>
                    <label htmlFor='nUsuario' className={styles.label}>Usuario: </label>
                    <input type="text" id="nUsuario" name="uUserName" placeholder="Usuario"></input>
                </div>
                <div>
                    <label htmlFor='born' className={styles.label}>Fecha de Nacimiento: </label>
                    <input type="text" id="born" name="uFechaNacimiento" placeholder="dd-mm-YYYY"></input>
                </div>
                <div>
                    <label htmlFor='contrasenia' className={styles.label}>Contraseña: </label>
                    <input type="password" id="contrasenia" name="uPassword" placeholder="******"></input>
                </div>
                {/* Campo oculto para UserActual */}
                <input type="hidden" name="UserActual" value={ usuario.userName } />
                <div className={styles.contenedor}>
                    <button type="submit" className={styles.botonIngresar}>Modificar</button>
                </div>
            </form>
        </div>
    );
}

export default ModificarPerfil;