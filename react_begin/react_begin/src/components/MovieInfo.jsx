function MovieInfo({movies, handleDelete}){
return(
    <div className="movie-list">
        {movies.map((movie) =>(
            <div key={movie.id} style={{border: "1px solid #ccc", margin: "10px 0", padding: "10px"}}>
                <h3>{movie.nomi}</h3>
                <p>Janri: {movie.janri}</p>
                <button onClick={() =>handleDelete(movie.id)}>Ochirish</button>
            </div>
        ))}

    </div>
)
}
export default MovieInfo

