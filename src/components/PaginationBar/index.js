import withReduxSaga from 'index';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getMovies } from 'store/movies/actions';
import { selectMoviesItems } from 'store/movies/selectors';

const PaginationBar = ({ getMovies }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage, getMovies]);

  return (
    <div className="pagination-bar col-md-12">
      <div className='col-md-6 prev-pagination'>
        {currentPage > 1 &&
          <Button variant="warning" onClick={() => setCurrentPage(currentPage-1)}>Page {currentPage-1}</Button>
        }
      </div>
      <div className='col-md-6 next-pagination'>
        <Button variant="warning" onClick={() => setCurrentPage(currentPage+1)}>Page {currentPage+1}</Button>
      </div>
    </div>
  );
}

PaginationBar.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(getMovies());

  return { isServer };
};

const mapStateToProps = createStructuredSelector({
  movies: selectMoviesItems
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (page) => {
      return dispatch(getMovies(page));
    }
  };
};

export default withReduxSaga(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PaginationBar),
);