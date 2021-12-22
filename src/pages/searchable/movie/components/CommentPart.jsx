import CommentBox from "components/CommentBox"

export default function CommentPart({ comments }) {
  if (comments.lenght > 0) {
    return (
      <div>
        {comments.map((comment) => (
          <CommentBox comment={comment} />
        ))}
      </div>
    )
  }
  return <div></div>
}
