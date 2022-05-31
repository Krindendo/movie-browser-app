import { COMMENTS_CONSTANT } from "hooks/movieService/constants";
import { useMutation, queryCache } from "react-query";
import { commentService } from "services/comment.service.js";

export default function useCreateComment() {
  return useMutation(({ ...comment }) => commentService.createComment({ ...comment }), {
    onMutate: (comment) => {
      queryCache.cancelQueries(COMMENTS_CONSTANT);
      const oldComments = queryCache.getQueryData(COMMENTS_CONSTANT);

      queryCache.getQueryData(COMMENTS_CONSTANT, (old) => {
        return [...old, comment];
      });

      return () => queryCache.setQueryData(COMMENTS_CONSTANT, oldComments);
    },
    onError: (error, values, rollback) => {
      rollback();
    },
    onSuccess: () => {
      queryCache.invalidateQueries(COMMENTS_CONSTANT);
    }
  });
}
