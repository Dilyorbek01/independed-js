import { useState } from "react";
import MovieInfo from "./components/MovieInfo";
import Modal from "./components/Modal";

function App() {
  const [movies, setMovies] = useState([
    {id: 1, nomi: "anyHow", janri: "kongilOchar"},
    {id: 2, nomi: "Garri Potter", janri: "Fantastika"}])

const [showMovies, setShowMovies] = useState(true)
const [showModal, setShowModal] = useState(false)

const handleDelete =(id)=>{
  setMovies(movies.filter((movie) => movie.id !== id))
}

return (
  <div style={{ padding: "20px" }}>
    <h1>Kino sevardar tizimi</h1>
    <button onClick={() => setShowMovies(!showMovies)}>
      {showMovies ? "kinolarni yashirish" : "kinolarni korsatish"}
    </button>
    <button onClick={()=> setShowModal(true)} style={{marginLeft: "10px" }}>Yangi kino qoshish</button>

    {showMovies && <MovieInfo movies={movies} handleDelete={handleDelete} />} 

    {showModal && (
      <Modal>
        <h2>Yangi kino qoshish</h2>
        <p>keyingi darslarda shuyerga form qoshamiz</p>
      </Modal>
    )}
  </div>
  )
}

export default App