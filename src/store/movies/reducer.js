import MoviesTypes from "./types";

const initialState = {
  isFetching: false,
  movies: [],
  genres: [],
  errorMessage: undefined,
  page: 1
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MoviesTypes.GET_MOVIES:
      return {
        ...state,
        isFetching: true,
      };

    case MoviesTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
      };

    case MoviesTypes.GET_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
      case MoviesTypes.GET_ALL_GENRES:
        return {
          ...state,
          isFetching: true,
        };
  
      case MoviesTypes.GET_ALL_GENRES_SUCCESS:
        return {
          ...state,
          isFetching: false,
          genres: action.payload.genres,
        };
  
      case MoviesTypes.GET_ALL_GENRES_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
