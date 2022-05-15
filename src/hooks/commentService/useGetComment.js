import { useQuery, queryCache } from "react-query";
import commentService from "services/comment.service.js";

export default function useGetComment(commnetId) {
  return useQuery(["comments", commnetId], () => commentService.getComment());
}
