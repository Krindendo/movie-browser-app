import { useState, useLayoutEffect } from "react"
import CommentBox from "components/CommentBox"
import AddComment from "components/AddComment"
import useAuth from "hooks/useAuth"

export default function CommentPart({ comments, handleChanged }) {
  const [showAddCard, setShowAddCard] = useState(true)
  const { isLoggedIn, isUserHaveComment } = useAuth()

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      setShowAddCard(false)
      return
    }
    setShowAddCard(!isUserHaveComment(comments))
  }, [isLoggedIn])

  return (
    <>
      {comments?.length > 0 &&
        comments.map((comment) => <CommentBox comment={comment} key={comment._id} handleChanged={handleChanged} />)}
      {showAddCard && <AddComment handleChanged={handleChanged} />}
    </>
  )
}
