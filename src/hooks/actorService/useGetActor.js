import { useQuery } from "react-query";
import { actorService } from "services/actor.service";

export default function useGetActor(actorId) {
  return useQuery(["actor", actorId], () => actorService.getActor(actorId));
}
