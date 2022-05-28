import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";

export default function useDeleteComment({ commentId }) {
  return useMutation(() => commentService.deleteComment({ commentId }), {});
}
