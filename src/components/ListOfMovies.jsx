import MovieCard from "components/MovieCard";

export default function ListOfMovies({ movies }) {
  if (!movies) {
    return (
      <>
        <p>Nema filmova</p>
      </>
    );
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie._id} id={movie._id} title={movie.title} subtitle={movie.plot} year={movie.year} />
      ))}
    </>
  );
}
