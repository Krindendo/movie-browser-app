import { useMutation, queryCache } from "react-query";
import { actorService } from "actor.service.js";

export default function useCreateActor() {
  return useMutation((values) => actorService.createActor(values), {
    onMutate: (newActor) => {
      const oldActors = queryCache.getQueryData("actors");

      if (queryCache.getQueryData("actors")) {
        queryCache.setQueryData("actors", (old) => [...old, newActor]);
      }

      return () => queryCache.setQueryData("actors", oldActors);
    },
    onError: (error, _newPost, rollback) => {
      console.error("error", error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries("actors");
    }
  });
}
