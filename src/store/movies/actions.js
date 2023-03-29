import MoviesTypes from "./types";

export const getMovies = (page, genre) => {
  return {
    type: MoviesTypes.GET_MOVIES,
    page,
    genre
  };
};

export const getMoviesSuccess = (movies) => {
  return {
    type: MoviesTypes.GET_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const getMoviesFailure = (errorMessage) => {
  return {
    type: MoviesTypes.GET_MOVIES_FAILURE,
    payload: errorMessage,
  };
};

export const getAllGenres = () => {
  return {
    type: MoviesTypes.GET_ALL_GENRES,
  };
};

export const getAllGenresSuccess = (genres) => {
  return {
    type: MoviesTypes.GET_ALL_GENRES_SUCCESS,
    payload: genres,
  };
};

export const getAllGenresFailure = (errorMessage) => {
  return {
    type: MoviesTypes.GET_ALL_GENRES_FAILURE,
    payload: errorMessage,
  };
};
