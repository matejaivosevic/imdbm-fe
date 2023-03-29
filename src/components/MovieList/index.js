import PaginationBar from "components/PaginationBar";
import MovieListItem from "./MovieListItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsMoviesFetching,
  selectMoviesItems,
} from "../../store/movies/selectors";
import withReduxSaga from "../..";
import { useEffect } from "react";
import { getMovies } from "store/movies/actions";
import { Spinner } from "react-bootstrap";

const MovieList = ({movies, isLoading}) => {
  return (
    <>
    {!isLoading ? 
        <div className="all-movies col-md-12">
          {movies.length && movies.map(movie => (
            <MovieListItem key={movie.id} movie={movie}/>
          ))}
        </div>
        :
        <div className="col-md-12 spinner">
          <Spinner animation="grow"/>
        </div>
      }
    <PaginationBar/>
    </>
  );
}

MovieList.getInitialProps = async (props) => {
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
  )(MovieList),
);