import { useQuery, queryCache } from "react-query";
import commentService from "services/comment.service.js";
import { COMMENT_CONSTANT } from "./constants";

export default function useGetComment({ commnetId }) {
  return useQuery([COMMENT_CONSTANT, commnetId], () => commentService.getComment(commnetId));
}
