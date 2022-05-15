import api from "helper/apiRequest";
import { formatDate } from "helper/formatDate";
const baseUrl = "/api/v1/movie";

const getMovies = async (title, rating, titleSort, releasedSort, skip) => {
  let content = [];
  let apiCall = "";
  if (title) {
    content.push(`&title=${title}`);
  } else {
    title = "";
  }
  if (rating) {
    content.push(`&rating=${rating}`);
  } else {
    rating = "";
  }
  if (titleSort) {
    content.push(`&titleSort=${titleSort}`);
  } else {
    titleSort = "";
  }
  if (releasedSort) {
    content.push(`&releasedSort=${releasedSort}`);
  } else {
    releasedSort = "desc";
  }
  if (skip) {
    content.push(`&skip=${skip}`);
  }
  if (content.length > 0) {
    content[0] = content[0].substring(1); //Remove & from first element;
    apiCall = "?";
    apiCall += content.reduce((prevItem, curentItem) => prevItem + curentItem);
  }
  const data = await api(baseUrl + apiCall, "GET");
  if (data?.movies) {
    return data.movies;
  }
  return [];
};
const getMovie = async (movieId) => {
  const data = await api(baseUrl + `/${movieId}`, "GET");
  if (data?.movie) {
    data.movie.dateFormated = formatDate(new Date(data.movie.released.slice(0, -1)));
    return data.movie;
  }
  return null;
};
const getMovieComments = async (movieId) => {
  const data = await api(baseUrl + `/${movieId}/comments`, "GET");
  if (data?.comments) {
    return data.comments;
  }
  return null;
};

export const movieService = {
  getMovies,
  getMovie,
  getMovieComments
};
