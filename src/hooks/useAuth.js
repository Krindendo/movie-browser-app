import { useEffect, useState, useMemo } from "react"
import Cookies from "universal-cookie"

export default function useAuth() {
  const cookie = new Cookies().get("local_token")
  const user = useMemo(() => cookie, [cookie])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    console.log("user", user)
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  const isUserHaveComment = (comments) => {
    console.log("comments", comments)
    if (comments?.length > 0) {
      const isUserAlreadyHaveComment = comments.find((comment) => comment.user_id === user)
      console.log("isUserAlreadyHaveComment", isUserAlreadyHaveComment)
      if (isUserAlreadyHaveComment) return true
    }
    return false
  }

  return {
    user,
    isLoggedIn,
    isUserHaveComment
  }
}
