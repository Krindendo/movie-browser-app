import { useEffect, useState, useMemo } from "react";
import Cookies from "universal-cookie";

export default function useAuth() {
  const cookie = new Cookies().get("local_token");
  const user = useMemo(() => cookie, [cookie]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("user", user);
    setIsLoggedIn(!!user);
  }, [user]);

  const isUserHaveComment = (comments) => {
    if (comments?.length > 0) {
      return comments.some((comment) => comment.user_id === user);
    }
    return false;
  };

  return {
    user,
    isLoggedIn,
    isUserHaveComment
  };
}
