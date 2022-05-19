import { useQuery, useQueryClient } from "react-query";
import { movieService } from "services/movie.service.js";

export default function useGetMovie(movieId) {
  const queryClient = useQueryClient();
  return useQuery(["movies", movieId], () => movieService.getMovie(movieId), {
    initialData: () => {
      return queryClient.getQueryData("movies")?.find((movie) => movie._id === movieId);
    },
    initialStale: true
  });
}
