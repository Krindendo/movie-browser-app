import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";

export default function useDeleteComment() {
  return useMutation((values) => commentService.deleteComment(values), {});
}
