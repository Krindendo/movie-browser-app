import api from "helper/apiRequest"
const baseUrl = "/api/v1/comment"

const createComment = async (body) => {
  const data = await api(baseUrl + "/", "POST", body, true)
  if (data?.comment) {
    return data.comment
  }
  return null
}
const getSingleComment = async (commentId) => {
  const data = await api(`${baseUrl}/${commentId}`, "GET", {}, true)
  if (data?.comment) {
    return data.comment
  }
  return null
}
const updateComment = async (commentId, body) => {
  const data = await api(`${baseUrl}/${commentId}`, "PATCH", body, true)
  if (data?.comment) {
    return data.comment
  }
  return null
}
const deleteComment = async (commentId) => {
  const data = await api(`${baseUrl}/${commentId}`, "DELETE", {}, true)
  if (data?.msg) {
    return data.msg
  }
  return ""
}

export const commentService = {
  createComment,
  getSingleComment,
  updateComment,
  deleteComment
}
