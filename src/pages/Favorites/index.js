import styles from './Favorites.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@primeflix")
        setMovies(JSON.parse(myList) || [])
    }, [])


    return (
        <div className={styles.my_movies}>
            <h1>Favorites movies</h1>
            <ul>
                {movies.map((movie) => (
                    <Link className={styles.body_li} to={`/movie/${movie.id}`}>
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>Details</Link>
                                <button><i class="bi bi-trash3"></i></button>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;