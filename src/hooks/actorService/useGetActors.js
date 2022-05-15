import { useQuery } from "react-query";
import { actorService } from "services/actor.service";

export default function useGetActors() {
  return useQuery("actors", () => actorService.getActors());
}
