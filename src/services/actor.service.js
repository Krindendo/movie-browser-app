import request from "utils/axios";
import format from "utils/format";
const baseUrl = "/api/v1/actor";

const getActors = async () => {
  const data = await request(baseUrl + "/", "GET");
  if (data?.actors) {
    return data.actors;
  }
  return [];
};
const getActor = async ({ actorId }) => {
  const data = await request(baseUrl + `/${actorId}`, "GET");
  if (data?.actor) {
    data.actor.dateFormated = format.DateTime(data.actor.born_date.slice(0, -1));
    data.actor.movies = data.actor.movies.map(({ movie_id: _id, title }) => {
      return { _id, title };
    });
    return data.actor;
  }
  return null;
};
const createActor = async ({ name, professions, movies, born_date, biography, image }) => {
  const body = {
    name,
    professions,
    movies,
    born_date,
    biography,
    image
  };
  const data = await request("/", "POST", body);
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
