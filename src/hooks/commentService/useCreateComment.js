import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";

export default function useCreateComment() {
  return useMutation((values) => commentService.createComment(values), {
    onMutate: (newComment) => {
      const oldComments = queryCache.getQueryData("comments");

      if (queryCache.getQueryData("comments")) {
        queryCache.setQueryData("comments", (old) => [...old, newComment]);
      }

      return () => queryCache.setQueryData("comments", oldComments);
    },
    onError: (error, _newComment, rollback) => {
      console.error("error", error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryCache.invalidateQueries("comments");
    }
  });
}
