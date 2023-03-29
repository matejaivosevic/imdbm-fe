import { GENRES } from "utils/constants/tmdbConstants";
import { genresInstance } from "../../services/apis";

const getAllGenresRequest = async () => {
  return await genresInstance.get(`/${GENRES.allGenres}`);
};

const getMoviesRequest = async ({page, genre}) => {
    if(!genre) {
      return await genresInstance.get(`/${GENRES.allMovies}?page=${page}`);
    } else {
      return await genresInstance.get(`/${GENRES.movieGenres}?page=${page}&with_genres=${genre}`);
    }
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllGenresRequest,
    getMoviesRequest
};
