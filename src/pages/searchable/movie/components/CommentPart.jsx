import CommentBox from "components/CommentBox"
import AddComment from "components/AddComment"

export default function CommentPart({ comments }) {
  const user = localStorage.getItem("userId")

  return (
    <>
      {comments?.length > 0 && comments.map((comment) => <CommentBox comment={comment} key={comment._id} />)}
      {user && <AddComment />}
    </>
  )
}
