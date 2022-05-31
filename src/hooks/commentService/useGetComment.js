import { COMMENTS_CONSTANT } from "hooks/movieService/constants";
import { useQuery, queryCache } from "react-query";
import { commentService } from "services/comment.service.js";

export default function useGetComment({ commentId }) {
  return useQuery([COMMENTS_CONSTANT, commentId], () => commentService.getComment(commentId), {
    placeholderData: () => {
      return queryCache.getQueryData(COMMENTS_CONSTANT)?.find((comment) => comment._id === commentId);
    },
    staleTime: 2000
  });
}
