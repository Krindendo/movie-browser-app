import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";
import { MOVIES_CONSTANT } from "./constants";

export default function useGetMovies({ enabled = false, ...movie }) {
  return useQuery([MOVIES_CONSTANT], () => movieService.getMovies({ ...movie }), {
    enabled
  });
}
