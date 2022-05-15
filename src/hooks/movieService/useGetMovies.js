import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";

export default function useGetMovies() {
  return useQuery("movies", (title, rating, titleSort, releasedSort, skip) =>
    movieService.getMovies(title, rating, titleSort, releasedSort, skip)
  );
}
