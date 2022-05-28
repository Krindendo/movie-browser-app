import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";
import { MOVIES_CONSTANT } from "./constants";

export default function useGetMovies({ title, rating, titleSort, releasedSort, skip, enabled = false }) {
  return useQuery(MOVIES_CONSTANT, () => movieService.getMovies({ title, rating, titleSort, releasedSort, skip }), {
    enabled
  });
}
