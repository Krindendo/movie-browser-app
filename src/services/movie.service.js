import api from "helper/apiRequest"
import { formatDate } from "helper/formatDate"
const baseUrl = "/api/v1/movie"

const getAllMovies = async (title, rating, titleSort, releasedSort, skip) => {
  let content = []
  let apiCall = "?"
  if (title) content.push(`&title=${title}`)
  if (rating) content.push(`&rating=${rating}`)
  if (titleSort) content.push(`&titleSort=${titleSort}`)
  if (releasedSort) content.push(`&releasedSort=${releasedSort}`)
  if (skip) content.push(`&skip=${skip}`)
  if (content.length > 0) {
    content[0] = content[0].substring(1)
    apiCall += content.reduce((prevItem, curentItem) => prevItem + curentItem)
  } else {
    apiCall = ""
  }
  const data = await api(baseUrl + apiCall, "GET")
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
  console.log("data", data)
  if (data?.comments) {
    return data.comments
  }
  return null
}

export const movieService = {
  getAllMovies,
  getSingleMovie,
  getSingleMovieComments
}
