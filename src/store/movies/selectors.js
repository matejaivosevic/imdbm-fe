import { createSelector } from "reselect";

const selectMovies = (state) => {
  return state.movies;
};

export const selectIsMoviesFetching = createSelector(
  [selectMovies],
  (movies) => {
    return movies.isFetching;
  },
);

export const selectMoviesItems = createSelector(
  [selectMovies],
  (movies) => {
    return movies.movies;
  },
);
