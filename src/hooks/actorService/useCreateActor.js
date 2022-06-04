import { useMutation, queryCache } from "react-query";
import { actorService } from "actor.service.js";
import { ACTORS_CONSTANT } from "./constants";

export default function useCreateActor({ ...actor }) {
  return useMutation(() => actorService.createActor({ ...actor }), {
    onMutate: (actor) => {
      const oldActors = queryCache.getQueryData([ACTORS_CONSTANT, actor._id]);

      if (queryCache.getQueryData([ACTORS_CONSTANT, actor._id])) {
        queryCache.setQueryData([ACTORS_CONSTANT, actor._id], (old) => [...old, actor]);
      }

      return () => queryCache.setQueryData([ACTORS_CONSTANT, actor._id], oldActors);
    },
    onError: (error, _actor, rollback) => rollback?.(),
    onSettled: () => {
      queryCache.invalidateQueries([ACTORS_CONSTANT, actor._id]);
    }
  });
}
