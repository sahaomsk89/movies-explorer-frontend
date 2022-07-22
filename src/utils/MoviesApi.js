import { MOVIES_API_URL } from './constants';
import { getResponse } from './MainApi';

export const getMovies = () => {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(getResponse);

  // .then((movies) => {
  //   return movies;
  // });
};
