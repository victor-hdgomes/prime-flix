import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import styles from './Movie.module.css'

const Movie = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "2b7e214eb551e162c047644b9b673f1a"
                }
            })
            .then((res)=>{
                setMovie(res.data)
                setLoading(false)
            })
            .catch(()=>{
                navigate("/", { replace: true })
                return
            })
        }

        loadMovie()

        return () => {
            console.log("desmontado")
        }
    }, [navigate, id])

    if (loading) {
        return(
            <div className={styles.movie_info}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={styles.movie_info}>
            <a href="/"><i class="bi bi-arrow-left"></i> Back</a>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            
            <h3>Overview</h3>
            <span>{movie.overview}</span>

            <strong>Rating: {movie.vote_average} / 10</strong>

            <div className={styles.buttons}>
                <button>Save</button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a>
            </div>
        </div>
    )
}

export default Movie