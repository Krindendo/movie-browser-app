import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useGetMovieComments({ movieId }) {
  return useQuery(COMMENTS_CONSTANT, () => movieService.getMovieComments({ movieId }));
}
