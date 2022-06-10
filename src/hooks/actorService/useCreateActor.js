import { useMutation, useQueryClient } from "react-query";
import { actorService } from "actor.service.js";
import { ACTORS_CONSTANT } from "./constants";

export default function useCreateActor({ actorId }) {
  const queryClient = useQueryClient();
  return useMutation(({ ...actor }) => actorService.createActor({ ...actor }), {
    onMutate: (newActor) => {
      queryClient.cancelQueries([ACTORS_CONSTANT, actorId]);

      const previousActors = queryClient.getQueryData([ACTORS_CONSTANT, actorId]);

      queryClient.setQueryData([ACTORS_CONSTANT, actorId], (old) => [...old, newActor]);

      return { previousActors };
    },
    onError: (error, newActor, context) => {
      queryClient.setQueryData([ACTORS_CONSTANT, actorId], context.previousActors);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([ACTORS_CONSTANT, actorId]);
    }
  });
}
