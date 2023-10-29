import { Link } from 'react-router-dom';
import styles from './DoctorNavBar.module.css';
import { useContext } from 'react';
import { UserContext} from '../../App';

function DoctorNavBar(){
    const usuario = useContext(UserContext);
    return(
        <nav className= {styles.navbar} >
            <ul className={styles.ulestilo}>
                <li className={styles.liestilo}>
                    <Link to="/doctor/recetas">Crear Recetas</Link>
                </li>
                <li className={styles.liestilo}>
                    <Link to="/login">Cerrar Sesion</Link>
                </li>
            </ul>
        </nav>


    )
}

export default DoctorNavBar;