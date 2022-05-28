import { useMutation, queryCache } from "react-query";
import { actorService } from "actor.service.js";
import { ACTOR_CONSTANT } from "./constants";

export default function useCreateActor({ ...values }) {
  return useMutation(() => actorService.createActor({ ...values }), {
    onMutate: (newActor) => {
      const oldActors = queryCache.getQueryData(ACTOR_CONSTANT);

      if (queryCache.getQueryData(ACTOR_CONSTANT)) {
        queryCache.setQueryData(ACTOR_CONSTANT, (old) => [...old, newActor]);
      }

      return () => queryCache.setQueryData(ACTOR_CONSTANT, oldActors);
    },
    onError: (error, _newPost, rollback) => {
      console.error("error", error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries(ACTOR_CONSTANT);
    }
  });
}
