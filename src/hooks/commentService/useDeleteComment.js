import { useMutation, useQueryClient } from "react-query";
import { commentService } from "services/comment.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useDeleteComment({ movieId }) {
  const queryClient = useQueryClient();
  return useMutation(({ commentId }) => commentService.deleteComment({ commentId }), {
    onError: (error, variables, rollback) => {
      rollback();
    },
    onSuccess: (data, commentId) => {
      const previousComments = queryClient.getQueryData([COMMENTS_CONSTANT, movieId]);
      const optimisticComments = previousComments.filter((comment) => comment._id !== commentId);

      queryClient.setQueryData([COMMENTS_CONSTANT, movieId], optimisticComments);
      queryClient.invalidateQueries([COMMENTS_CONSTANT, movieId]);
    }
  });
}
