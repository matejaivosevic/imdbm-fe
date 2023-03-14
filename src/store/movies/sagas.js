import { takeLatest, call, put, all } from "redux-saga/effects";

import * as services from "../../utils/services/movies";
import { getMoviesSuccess, getMoviesFailure } from "./actions";
import MoviesTypes from "./types";

export function* getMoviesAsync() {
  try {
    // const response = yield call(services.getMovies);
    // yield put(getMoviesSuccess(response.data));
  } catch (error) {
    //yield put(getMoviesFailure(error.message));
  }
}

export function* getMovies() {
  yield takeLatest(MoviesTypes.GET_MOVIES, getMoviesAsync);
}

export function* moviesSagas() {
  yield all([call(getMovies)]);
}
