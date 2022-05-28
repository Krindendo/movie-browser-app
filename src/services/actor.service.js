import api from "helper/apiRequest";
import { formatDate } from "helper/formatDate";
const baseUrl = "/api/v1/actor";

const getActors = async () => {
  const data = await api(baseUrl + "/", "GET");
  if (data?.actors) {
    return data.actors;
  }
  return [];
};
const getActor = async ({ actorId }) => {
  const data = await api(baseUrl + `/${actorId}`, "GET");
  if (data?.actor) {
    data.actor.dateFormated = formatDate(new Date(data.actor.born_date.slice(0, -1)));
    data.actor.movies = data.actor.movies.map(({ movie_id: _id, title }) => {
      return { _id, title };
    });
    return data.actor;
  }
  return null;
};
const createActor = async ({ body }) => {
  const data = await api("/", "POST", body);
  if (data?.actor) {
    return data.actor;
  }
  return null;
};

export const actorService = {
  createActor,
  getActors,
  getActor
};
