import request from "utils/axios";
const baseUrl = "/api/v1/comment";

const createComment = async ({ movieId: movie_id, text }) => {
  const body = {
    movie_id,
    text
  };
  const data = await request(baseUrl + "/", "POST", body, true);
  if (data?.comment) {
    return data.comment;
  }
  return null;
};
const getComment = async ({ commentId }) => {
  const data = await request(`${baseUrl}/${commentId}`, "GET", {}, true);
  if (data?.comment) {
    return data.comment;
  }
  return null;
};
const updateComment = async ({ commentId, movieId: movie_id, text }) => {
  const body = {
    movie_id,
    text
  };
  const data = await request(`${baseUrl}/${commentId}`, "PATCH", body, true);
  if (data?.comment) {
    return data.comment;
  }
  return null;
};
const deleteComment = async ({ commentId }) => {
  const data = await request(`${baseUrl}/${commentId}`, "DELETE", {}, true);
  if (data?.msg) {
    return data.msg;
  }
  return "";
};

export const commentService = {
  createComment,
  getComment,
  updateComment,
  deleteComment
};
