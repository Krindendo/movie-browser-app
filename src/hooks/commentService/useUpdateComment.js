import { useMutation, useQueryClient } from "react-query";
import { commentService } from "services/comment.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useUpdateComment({ movieId }) {
  const queryClient = useQueryClient();
  return useMutation(({ ...comment }) => commentService.updateComment({ ...comment }), {
    onMutate: async (newComment) => {
      await queryClient.cancelQueries([COMMENTS_CONSTANT, movieId, newComment.commentId]);
      const previousComment = queryClient.getQueryData([COMMENTS_CONSTANT, movieId, newComment.commentId]);
      queryClient.setQueryData([COMMENTS_CONSTANT, movieId, newComment.commentId], newComment);

      return { previousComment, newComment };
    },
    onError: (error, newComment, context) => {
      queryClient.setQueryData([COMMENTS_CONSTANT, movieId, context.newComment.commentId], context.previousComment);
    },
    onSuccess: (newComment) => {
      queryClient.invalidateQueries([COMMENTS_CONSTANT, movieId, newComment.commentId]);
    }
  });
}
