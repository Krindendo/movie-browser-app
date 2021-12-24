import { useState, useLayoutEffect } from "react"
import CommentBox from "components/CommentBox"
import AddComment from "components/AddComment"
import checkUser from "helper/checkIfUserIsLoged"

export default function CommentPart({ comments }) {
  const [showAddCard, setShowAddCard] = useState(true)
  useLayoutEffect(() => {
    if (comments?.length > 0) {
      const userId = localStorage.getItem("userId")
      const isUserAlreadyHaveComment = comments.find((comment) => comment.user_id === userId)
      if (isUserAlreadyHaveComment) {
        setShowAddCard(false)
      }
    }
    if (checkUser()) {
      setShowAddCard(false)
    }
  }, [comments])

  return (
    <>
      {comments?.length > 0 && comments.map((comment) => <CommentBox comment={comment} key={comment._id} />)}
      {showAddCard && <AddComment />}
    </>
  )
}
