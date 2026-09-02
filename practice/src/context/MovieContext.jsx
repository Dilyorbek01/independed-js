import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext()
export function MovieProvider({children}) {
    const [movies, setMovies] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [editMovie, setEditMovie] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3000/movies")
   
    .then((res) => {
        setMovies(res.data)
        setIsPending(false)
    })
    .catch((err) => {
        setError(err.message)
        setIsPending(false)
         })
    },[])
    const handleAddMovie =(newMovie)=> {
        axios.post("http://localhost:3000/movies", newMovie)
        .then((res) => {
            setMovies((prev) => [...prev, res.data])
        })
    }
    const handleDeleteMovie = (id) => {
        axios.delete(`http://localhost:3000/movies/${id}`)
        .then(() => {
            setMovies((prev) => prev.filter(item => item.id !== id))
        })
    }
    const handleEditClick =(movie)=> {
        setEditMovie(movie)
    }

    const handleUpdateMovie =(updatedMovie)=> {
        axios.put(`http://localhost:3000/movies/${updatedMovie.id}`, updatedMovie)
        .then((res)=> {
            setMovies((prev) => prev.map(item => item.id === updatedMovie.id ? res.data : item))
            setEditMovie(null)
        })
    }
    return(
        <MovieContext.Provider
        value={{movies, isPending, error, handleAddMovie, handleDeleteMovie, handleEditClick, handleUpdateMovie}}
        >
            {children}
        </MovieContext.Provider>
    )
}