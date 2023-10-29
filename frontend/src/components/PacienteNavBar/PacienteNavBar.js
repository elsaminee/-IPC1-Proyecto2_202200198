import { Link } from 'react-router-dom';
import styles from './PacienteNavBar.module.css';
import { useContext } from 'react';
import { UserContext} from '../../App';

function PacienteNavBar(){
    const usuario = useContext(UserContext);
    return(
        <nav className= {styles.navbar} >
            <ul className={styles.ulestilo}>
                <li className={styles.liestilo}>
                    <Link to="/paciente/modificarPerfil">Modificar Perfil</Link>
                </li>
                <li className={styles.liestilo}>
                    <Link to="/paciente/citas">Solicitar Citas</Link>
                </li>
                <li className={styles.liestilo}>
                    <Link to="/paciente/medicamento">Compra Medicamento</Link>
                </li>
                <li className={styles.liestilo}>
                    <Link to="/login">Cerrar Sesion</Link>
                </li>

            </ul>
        </nav>


    )
}

export default PacienteNavBar;