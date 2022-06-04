import { useQuery, useQueryClient } from "react-query";
import { commentService } from "services/comment.service.js";
import { COMMENTS_CONSTANT } from "./constants";

export default function useGetComment({ movieId, commentId }) {
  const queryClient = useQueryClient();
  return useQuery([COMMENTS_CONSTANT, movieId, commentId], () => commentService.getComment(commentId), {
    placeholderData: () => {
      return queryClient.getQueryData([COMMENTS_CONSTANT, movieId])?.find((comment) => comment._id === commentId);
    },
    staleTime: 2000
  });
}
