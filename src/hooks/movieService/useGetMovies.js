import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";

export default function useGetMovies(title, rating, titleSort, releasedSort, skip) {
  return useQuery("movies", () => movieService.getMovies(title, rating, titleSort, releasedSort, skip), {
    enabled: false
  });
}
