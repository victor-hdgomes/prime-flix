import styles from './Header.module.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <Link className={styles.logo} to="/">Prime Flix</Link>
            <Link className={styles.favorites} to="/favorites">My movies</Link>


        </header>
    )
}

export default Header;