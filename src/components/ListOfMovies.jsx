import MovieCard from "components/MovieCard";

export default function ListOfMovies(props) {
  const { movies } = props;
  if (movies) {
    return (
      <>
        {movies.map((movie) => (
          <MovieCard key={movie._id} id={movie._id} title={movie.title} subtitle={movie.plot} year={movie.year} />
        ))}
      </>
    );
  }

  return (
    <>
      <p>Nema filmova</p>
    </>
  );
}
