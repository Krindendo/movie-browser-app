import { useState, useEffect } from "react"
import CommentBox from "components/CommentBox"
import AddComment from "components/AddComment"
import useAuth from "hooks/useAuth"

export default function CommentPart({ comments, handleChanged }) {
  const [showAddCard, setShowAddCard] = useState(true)
  const { isLoggedIn, isUserHaveComment } = useAuth()

  useEffect(() => {
    console.log("comments", comments)
    if (!isLoggedIn) {
      setShowAddCard(false)
      return
    }
    setShowAddCard(!isUserHaveComment(comments))
  }, [comments, isLoggedIn])

  return (
    <>
      {comments?.length > 0 &&
        comments.map((comment) => <CommentBox comment={comment} key={comment._id} handleChanged={handleChanged} />)}
      {showAddCard && <AddComment handleChanged={handleChanged} />}
    </>
  )
}
