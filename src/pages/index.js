import MovieList from "components/MovieList";
import MovieListItem from "components/MovieList/MovieListItem";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import withReduxSaga from "..";

import { getAllGenres, getMovies } from "../store/movies/actions";
import {
  selectIsMoviesFetching,
  selectMoviesItems,
} from "../store/movies/selectors";

const Home = ({ movies, isLoading, getMovies }) => {
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

Home.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(getMovies());

  return { isServer };
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesItems,
  isLoading: selectIsMoviesFetching,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => {
      return dispatch(getMovies());
    },
  };
};

export default withReduxSaga(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
