import { COMMENTS_CONSTANT } from "hooks/movieService/constants";
import { useMutation, queryCache } from "react-query";
import { commentService } from "services/comment.service.js";

export default function useDeleteComment() {
  return useMutation(({ commentId }) => commentService.deleteComment({ commentId }), {
    onError: (error, variables, rollback) => {
      rollback();
    },
    onSuccess: (data, commentId) => {
      const previousComments = queryCache.getQueryData(COMMENTS_CONSTANT);
      const optimisticComments = previousComments.filter((comment) => comment._id !== commentId);

      queryCache.setQueryData(COMMENTS_CONSTANT, optimisticComments);
      queryCache.invalidateQueries(COMMENTS_CONSTANT);
    }
  });
}
