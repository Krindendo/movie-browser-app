import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";
import { COMMENT_CONSTANT } from "./constants";

export default function useCreateComment({ ...comment }) {
  return useMutation(() => commentService.createComment({ ...comment }), {
    onMutate: (comment) => {
      const oldComments = queryCache.getQueryData(COMMENT_CONSTANT);

      if (queryCache.getQueryData(COMMENT_CONSTANT)) {
        queryCache.setQueryData(COMMENT_CONSTANT, (old) => [...old, comment]);
      }

      return () => queryCache.setQueryData(COMMENT_CONSTANT, oldComments);
    },
    onError: (error, _comment, rollback) => {
      console.error("error", error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries(COMMENT_CONSTANT);
    }
  });
}
