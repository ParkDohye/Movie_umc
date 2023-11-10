function Movie(props) {
  let movie = props.movie;
    return <div className="movie">
      <div className="movie-poster">
        <img
          src={'https://image.tmdb.org/t/p/w1288/${movie.poster_path}'}
          alt={movie.Title}
        />
      </div>
      <div className="movie-info">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}</div>
      </div>
      <div className="movie-overview">
        <div className="overview-content">
          <div className="title">{movie.title}</div>
          <div className="overview">{movie.overview}</div>
        </div>
      </div>
    </div>;
} 
  export default Movie