import { useMutation, queryCache } from "react-query";
import commentService from "services/comment.service.js";

export default function useUpdateComment() {
  return useMutation((newComment) => commentService.updateComment(newComment), {
    onMutate: (newComment) => {
      queryCache.setQueryData(["comments", newComment.id], newComment);
    },
    onSuccess: (newComment) => {
      queryCache.setQueryData(["comments", newComment.id], newComment);

      if (queryCache.getQueryData("comments")) {
        queryCache.setQueryData("comments", (old) => {
          return old.map((d) => {
            if (d.id === newComment.id) {
              return newComment;
            }
            return d;
          });
        });
      } else {
        queryCache.setQueryData("comments", [newComment]);
        queryCache.invalidateQueries("comments");
      }
    }
  });
}
