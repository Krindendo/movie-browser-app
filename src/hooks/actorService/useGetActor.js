import { useQuery } from "react-query";
import { actorService } from "services/actor.service";
import { ACTORS_CONSTANT } from "./constants";

export default function useGetActor({ actorId }) {
  return useQuery([ACTORS_CONSTANT, actorId], () => actorService.getActor({ actorId }), { enabled: Boolean(actorId) });
}
