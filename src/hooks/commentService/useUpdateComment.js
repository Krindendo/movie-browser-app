import { COMMENTS_CONSTANT } from "hooks/movieService/constants";
import { useMutation, queryCache } from "react-query";
import { commentService } from "services/comment.service.js";

export default function useUpdateComment() {
  return useMutation(({ ...comment }) => commentService.updateComment({ ...comment }), {
    onMutate: (comment) => {
      queryCache.cancelQueries(COMMENTS_CONSTANT);

      const oldComment = queryCache.getQueryData([COMMENTS_CONSTANT, comment._id]);

      queryCache.setQueryData([COMMENTS_CONSTANT, comment._id], comment);

      return () => queryCache.setQueryData([COMMENTS_CONSTANT, comment._id], oldComment);
    },
    onError: (error, values, rollback) => rollback(),
    onSuccess: (comment) => {
      queryCache.invalidateQueries(COMMENTS_CONSTANT);
      queryCache.invalidateQueries([COMMENTS_CONSTANT, comment._id]);
    }
  });
}
