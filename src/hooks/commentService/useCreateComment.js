import { useMutation, useQueryClient } from "react-query";
import { commentService } from "services/comment.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useCreateComment({ movieId }) {
  const queryClient = useQueryClient();
  return useMutation(({ ...comment }) => commentService.createComment({ ...comment }), {
    onMutate: (newComment) => {
      queryClient.cancelQueries([COMMENTS_CONSTANT, movieId]);
      const oldComments = queryClient.getQueryData([COMMENTS_CONSTANT, movieId]);

      queryClient.getQueryData([COMMENTS_CONSTANT, movieId], (old) => {
        return [...old, newComment];
      });

      return () => queryClient.setQueryData([COMMENTS_CONSTANT, movieId], oldComments);
    },
    onError: (error, values, rollback) => {
      rollback?.();
    },
    onSuccess: () => {
      queryClient.invalidateQueries([COMMENTS_CONSTANT, movieId]);
    }
  });
}
