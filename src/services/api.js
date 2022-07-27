// URL DA API
// movie/now_playing?api_key=2b7e214eb551e162c047644b9b673f1a

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;