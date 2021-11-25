import api from "helper/apiRequest"
import { formatDate } from "helper/formatDate"
const baseUrl = "/api/v1/movie"

const getAllMovies = async (rating = 5, limit = 10) => {
  const data = await api(baseUrl + `?rating=${rating}&limit=${limit}`, "GET")
  if (data?.movies) {
    return data.movies
  }
  return []
}
const getSingleMovie = async (movieId) => {
  const data = await api(baseUrl + `/${movieId}`, "GET")
  if (data?.movie) {
    data.movie.dateFormated = formatDate(new Date(data.movie.released.slice(0, -1)))
    return data.movie
  }
  return null
}
const getSingleMovieComments = async (movieId) => {
  const data = await api(baseUrl + `/${movieId}/comments`, "GET")
  if (data?.movie) {
    return data.movie
  }
  return null
}

export const movieService = {
  getAllMovies,
  getSingleMovie,
  getSingleMovieComments
}
