import { useMutation, queryCache } from "react-query";
import { actorService } from "actor.service.js";
import { ACTOR_CONSTANT } from "./constants";

export default function useCreateActor({ ...actor }) {
  return useMutation(() => actorService.createActor({ ...actor }), {
    onMutate: (actor) => {
      const oldActors = queryCache.getQueryData(ACTOR_CONSTANT);

      if (queryCache.getQueryData(ACTOR_CONSTANT)) {
        queryCache.setQueryData(ACTOR_CONSTANT, (old) => [...old, actor]);
      }

      return () => queryCache.setQueryData(ACTOR_CONSTANT, oldActors);
    },
    onError: (error, _actor, rollback) => {
      console.error("error", error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries(ACTOR_CONSTANT);
    }
  });
}
