import MovieList from "components/MovieList";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import withReduxSaga from "..";

import { getMovies } from "../store/movies/actions";
import {
  selectIsMoviesFetching,
  selectMoviesItems,
} from "../store/movies/selectors";

const Home = ({}) => {
  return (
    <div>
      <MovieList />
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
    }
  };
};

export default withReduxSaga(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
);
