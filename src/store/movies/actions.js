import MoviesTypes from "./types";

export const getMovies = () => {
  return {
    type: MoviesTypes.GET_MOVIES,
  };
};

export const getMoviesSuccess = (movies) => {
  return {
    type: MoviesTypes.getMoviesSuccess,
    payload: movies,
  };
};

export const getMoviesFailure = (errorMessage) => {
  return {
    type: MoviesTypes.getMoviesFailure,
    payload: errorMessage,
  };
};
