import { GENRES } from "utils/constants/tmdbConstants";
import { genresInstance } from "../../services/apis";

const getAllGenresRequest = async () => {
  return await genresInstance.get(`/${GENRES.allGenres}`);
};

const getAllMoviesRequest = async (page) => {
    return await genresInstance.get(`/${GENRES.allMovies}?page=${page}`);
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllGenresRequest,
    getAllMoviesRequest
};
