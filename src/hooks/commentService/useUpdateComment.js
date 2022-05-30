import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";
import { COMMENT_CONSTANT } from "./constants";

export default function useUpdateComment({ ...comment }) {
  return useMutation(() => commentService.updateComment({ ...comment }), {
    onMutate: (comment) => {
      queryCache.setQueryData([COMMENT_CONSTANT, comment.id], comment);
    },
    onSuccess: (comment) => {
      queryCache.setQueryData([COMMENT_CONSTANT, comment.id], comment);

      if (queryCache.getQueryData(COMMENT_CONSTANT)) {
        queryCache.setQueryData(COMMENT_CONSTANT, (old) => {
          return old.map((d) => {
            if (d.id === comment.id) {
              return comment;
            }
            return d;
          });
        });
      } else {
        queryCache.setQueryData(COMMENT_CONSTANT, [comment]);
        queryCache.invalidateQueries(COMMENT_CONSTANT);
      }
    }
  });
}
