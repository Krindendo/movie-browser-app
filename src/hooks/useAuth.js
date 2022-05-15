import { useEffect, useState, useMemo } from "react";
import Cookies from "universal-cookie";

export default function useAuth() {
  const cookie = new Cookies().get("local_token");
  const user = useMemo(() => cookie, [cookie]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const isUserHaveComment = (comments) => {
    if (comments?.length > 0) {
      const isUserAlreadyHaveComment = comments.find((comment) => comment.user_id === user);
      if (isUserAlreadyHaveComment) return true;
    }
    return false;
  };

  return {
    user,
    isLoggedIn,
    isUserHaveComment
  };
}
