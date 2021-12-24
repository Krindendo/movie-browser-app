import Cookies from "universal-cookie"

export default function checkUser() {
  const cookies = new Cookies()
  const user = cookies.get("local_token")

  if (user) {
    return false
  } else {
    return true
  }
}
