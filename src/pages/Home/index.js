import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
// movie/now_playing?api_key=2b7e214eb551e162c047644b9b673f1a

const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovies() {
            const res = await api.get("movie/now_playing", {
                params: {
                    api_key: "2b7e214eb551e162c047644b9b673f1a",
                    page: 1
                }
            })

            setMovies(res.data.results.slice(0, 10))
        }

        loadMovies()
        setLoading(false)
    }, [])

    if(loading){
        return(
            <div className={styles.loading}>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.movie_list}>
                {movies.map((movie) => (
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        <Link to={`/movie/${movie.id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home;