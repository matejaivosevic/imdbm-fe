import MovieListItem from "./MovieListItem";

const MovieList = ({movies}) => {

  return (
    <div className="all-movies col-md-12">
          {movies.length && movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie}/>
          ))}
    </div>
  );
}

export default MovieList;