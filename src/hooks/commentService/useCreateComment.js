import useAuth from "hooks/useAuth";
import { useMutation, useQueryClient } from "react-query";
import { commentService } from "services/comment.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useCreateComment({ movieId }) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation(({ ...comment }) => commentService.createComment({ ...comment }), {
    onMutate: (newComment) => {
      newComment.date = new Date(Date.now());
      newComment.name = localStorage.getItem("userName");
      newComment.user_id = user;
      queryClient.cancelQueries([COMMENTS_CONSTANT, movieId]);

      const previousComments = queryClient.getQueryData([COMMENTS_CONSTANT, movieId]);

      queryClient.setQueryData([COMMENTS_CONSTANT, movieId], (old) => [...old, newComment]);

      return { previousComments };
    },
    onError: (error, newComment, context) => {
      queryClient.setQueryData([COMMENTS_CONSTANT, movieId], context.previousComments);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([COMMENTS_CONSTANT, movieId]);
    }
  });
}
