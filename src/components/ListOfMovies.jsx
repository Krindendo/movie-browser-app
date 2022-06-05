import MovieCard from "components/MovieCard";
import styled from "styled-components";

export default function ListOfMovies({ movies }) {
  if (!movies) {
    return <Text>Nema filmova</Text>;
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie._id} id={movie._id} title={movie.title} subtitle={movie.plot} year={movie.year} />
      ))}
    </>
  );
}

const Text = styled.p`
  color: var(--secondary-color);
  font-size: 1.1rem;
  font-weight: 500;
`;
