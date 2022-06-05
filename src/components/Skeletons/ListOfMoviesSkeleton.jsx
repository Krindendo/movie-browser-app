import MovieCardSkeleton from "components/Skeletons/MovieCardSkeleton";

export default function ListOfMoviesSkeleton() {
  return (
    <>
      {Array.from(new Array(10)).map((item, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </>
  );
}
