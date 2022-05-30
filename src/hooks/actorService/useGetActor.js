import { useQuery } from "react-query";
import { actorService } from "services/actor.service";
import { ACTOR_CONSTANT } from "./constants";

export default function useGetActor({ actorId }) {
  return useQuery([ACTOR_CONSTANT, actorId], () => actorService.getActor({ actorId }), { enabled: Boolean(actorId) });
}
