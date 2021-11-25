import api from "helper/apiRequest"
const baseUrl = "/api/v1/comment"

const createComment = async (body) => {
  const data = await api(baseUrl + "/", "POST", body)
  if (data?.comment) {
    return data.comment
  }
  return null
}
const getSingleComment = async (commentId) => {
  const data = await api(`/${commentId}`, "GET")
  if (data?.comment) {
    return data.comment
  }
  return null
}
const updateComment = async (commentId, body) => {
  const data = await api(`/${commentId}`, "PATCH", body)
  if (data?.comment) {
    return data.comment
  }
  return null
}
const deleteComment = async (commentId) => {
  const data = await api(`/${commentId}`, "DELETE")
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
