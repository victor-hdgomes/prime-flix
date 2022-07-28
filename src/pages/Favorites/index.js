import styles from './Favorites.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

const Favorites = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@primeflix")
        setMovies(JSON.parse(myList) || [])
    }, [])

    const dropMovie = (id) => {
        let filter = movies.filter((item) => {
            return (item.id !== id)
        })

        setMovies(filter)
        localStorage.setItem("@primeflix", JSON.stringify(filter))
        toast.success("Movie successfully removed")
    }


    return (
        <div className={styles.my_movies}>
            <h1>Favorites movies</h1>

            {movies.length === 0 && <span>You didn't save any movie, <Link className={styles.any_movie} to="/">clique here to visit our catalog</Link></span>}

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <span>{movie.title}</span>
                        <div>
                            <Link to={`/movie/${movie.id}`}>Details</Link>
                            <button onClick={() => dropMovie(movie.id)}><i className="bi bi-trash3"></i></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;