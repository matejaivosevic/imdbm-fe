import { takeLatest, call, put } from "redux-saga/effects";

import services from "./apis";
import { getAllGenresSuccess, getAllGenresFailure, getMoviesFailure, getMoviesSuccess } from "./actions";
import MoviesTypes from "./types";

export function* getMoviesAsync(payload) {
  try {
    const response = yield call(services.getAllMoviesRequest, payload.page);
    yield put(getMoviesSuccess(response.data.results));
  } catch (error) {
    yield put(getMoviesFailure(error.message));
  }
}

export function* getAllGenres() {
  try {
    const response = yield call(services.getAllGenresRequest);
    yield put(getAllGenresSuccess(response.data));
  } catch (error) {
    yield put(getAllGenresFailure(error.message));
  }
}

export function* moviesSagas() {
  yield takeLatest(MoviesTypes.GET_MOVIES, getMoviesAsync);
  yield takeLatest(MoviesTypes.GET_ALL_GENRES, getAllGenres);
}
