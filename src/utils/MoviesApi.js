import { MOVIES_API_URL } from "./constants";

export const getMovies = () => {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((movies) => {
      return movies;
    });
};
