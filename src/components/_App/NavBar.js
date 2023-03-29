import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getAllGenres, resetPage } from 'store/movies/actions';
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import withReduxSaga from "../..";
import {
  selectAllGenres
} from '../../store/movies/selectors';
import { useRouter } from 'next/router';

const NavMenu = ({ genres, getAllGenres }) => {
  const router = useRouter();

  useEffect(() => {
    getAllGenres();
  }, []);

  const genreSelected = (name, id) => {
    router.push(`/genre?name=${name.toLowerCase()}&id=${id}`);
  }

  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand onClick={() => router.replace('/')}>IMDBM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => router.replace('/')}>Home</Nav.Link>
            <NavDropdown
            title="Genres" 
            id="navbarScrollingDropdown">
              {genres.length && genres.map(genre => (
                <NavDropdown.Item key={genre.id} onClick={() => genreSelected(genre.name, genre.id)}>
                    {genre.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavMenu.getInitialProps = async (props) => {
    const { store, isServer } = props.ctx;
    store.dispatch(getAllGenres());
  
    return { isServer };
  };
  
const mapStateToProps = createStructuredSelector({
    genres: selectAllGenres
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAllGenres: () => {
            return dispatch(getAllGenres());
        },
        resetPage: () => {
          return dispatch(resetPage());
        }

};
};

export default withReduxSaga(
connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavMenu),
);
  