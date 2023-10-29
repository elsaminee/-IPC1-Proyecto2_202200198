import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    const handleIngresar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch('http://localhost:4000/auth/login', {
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
        props.setUsuario(data.usuario);
        switch (data.usuario.tipoUsuario) {
            case "PACIENTE":
                navigate('/paciente')
                break;
            case "ENFERMERA":
                navigate('/enfermera')
                break;
            case "DOCTOR":
                navigate('/doctor')
                break;
        }


    }

    return (
        <div>
            <form onSubmit={handleIngresar} className={styles.formContainer} encType="multipart/form-data">
                <div>
                    <label htmlFor='nombreUsuario' className={styles.label}>Nombre de Usuario: </label>
                    <input type="text" id="nombreUsuario" name="uNombre" placeholder="Usuario"></input>
                </div>
                <div>
                    <label htmlFor='contrasenia' className={styles.label}>Contraseña: </label>
                    <input type="password" id="contrasenia" name="uPassword" placeholder="******"></input>
                </div>
                <div>

                    <button type="submit" className={styles.botonIngresar}>Iniciar Sesión</button>

                </div>
            </form>
            <div className={styles.centrar}>

                <button className={styles.botonRegistro}><Link to="/registro">Registro</Link></button>
            </div>

        </div>

    )
}

export default Login;