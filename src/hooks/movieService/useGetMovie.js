import { useQuery, useQueryClient } from "react-query";
import { movieService } from "services/movie.service.js";
import { MOVIES_CONSTANT } from "./constants";

export default function useGetMovie({ movieId }) {
  const queryClient = useQueryClient();
  return useQuery([MOVIES_CONSTANT, movieId], () => movieService.getMovie({ movieId }), {
    initialData: () => {
      return queryClient.getQueryData(MOVIES_CONSTANT)?.find((movie) => movie._id === movieId);
    }
  });
}
