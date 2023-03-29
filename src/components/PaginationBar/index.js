import withReduxSaga from 'index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getMovies } from 'store/movies/actions';
import { selectMoviesItems, selectPage } from 'store/movies/selectors';

const PaginationBar = ({ getMovies, page }) => {
  const router = useRouter();
  const genre = router.query && router.query.id || null;
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    getMovies(currentPage, genre);
  }, [currentPage, getMovies, genre]);

  useEffect(() => {
    setCurrentPage(1);
  }, [genre])

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
  movies: selectMoviesItems,
  page: selectPage
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (page, genre) => {
      return dispatch(getMovies(page, genre));
    }
  };
};

export default withReduxSaga(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PaginationBar),
);