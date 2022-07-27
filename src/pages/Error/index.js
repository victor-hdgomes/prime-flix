import { Link } from 'react-router-dom'
import styles from './Error.module.css'

const Error = () => {
    return(
        <div className={styles.not_found}>
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/">Check all movies</Link>
        </div>
    )
}

export default Error;