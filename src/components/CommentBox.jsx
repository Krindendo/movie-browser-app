export default function CommentBox({ comment }) {
  if (comment) {
    return <div>{comment.title}</div>
  }
  return <></>
}
