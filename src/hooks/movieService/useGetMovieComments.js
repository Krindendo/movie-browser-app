import { useQuery } from "react-query";
import { movieService } from "services/movie.service.js";

export default function useGetMovieComments(movieId) {
  return useQuery("comments", () => movieService.getMovieComments(movieId));
}
