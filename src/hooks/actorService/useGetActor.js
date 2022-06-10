import { useQuery, useQueryClient } from "react-query";
import { actorService } from "services/actor.service";
import { ACTORS_CONSTANT } from "./constants";

export default function useGetActor({ actorId }) {
  const queryClient = useQueryClient();
  return useQuery([ACTORS_CONSTANT, actorId], () => actorService.getActor({ actorId }), {
    enabled: Boolean(actorId),
    placeholderData: () => {
      return queryClient.getQueryData([ACTORS_CONSTANT, actorId])?.find((actor) => actor._id === actorId);
    },
    staleTime: 10 * 60 * 1000
  });
}
