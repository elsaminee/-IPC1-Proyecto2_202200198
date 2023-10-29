import { Link } from 'react-router-dom';
import styles from './EnfermeraNavBar.module.css';
import { useContext } from 'react';
import { UserContext} from '../../App';

function EnfermeraNavBar() {
    const usuario = useContext(UserContext);
    return (
        <nav className= {styles.navbar} >
            <ul className={styles.ulestilo}>
                <li className={styles.liestilo}>
                    <Link to="/enfermera/citas">Aceptar Citas</Link>
                </li>
                <li className={styles.liestilo}>
                    <Link to="/login">Cerrar Sesion</Link>
                </li>
            </ul>
        </nav>

    );
}

export default EnfermeraNavBar;