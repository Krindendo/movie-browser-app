import { useState, useLayoutEffect } from "react"
import CommentBox from "components/CommentBox"
import AddComment from "components/AddComment"
import useAuth from "hooks/useAuth"

export default function CommentPart({ comments }) {
  const [showAddCard, setShowAddCard] = useState(true)
  const { isLoggedIn, isUserHaveComment } = useAuth()

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      setShowAddCard(true)
      return
    }
    setShowAddCard(!isUserHaveComment(comments))
  }, [isLoggedIn])

  return (
    <>
      {comments?.length > 0 && comments.map((comment) => <CommentBox comment={comment} key={comment._id} />)}
      {showAddCard && <AddComment />}
    </>
  )
}
