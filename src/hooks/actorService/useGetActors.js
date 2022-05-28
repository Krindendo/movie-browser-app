import { useQuery } from "react-query";
import { actorService } from "services/actor.service";
import { ACTORS_CONSTANT } from "./constants";

export default function useGetActors() {
  return useQuery(ACTORS_CONSTANT, () => actorService.getActors());
}
