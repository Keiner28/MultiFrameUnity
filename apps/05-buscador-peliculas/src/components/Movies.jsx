export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <figure>
            <img src={movie.poster} alt={movie.Title} />
            <figcaption>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesResults() {
  return <p>No se encontraron películas para esta búsqueda</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
