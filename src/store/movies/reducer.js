import MoviesTypes from "./types";

const initialState = {
  isFetching: false,
  movies: [
    {
      title: "The Lord of The Rings",
      rating: 4.3
    }
  ],
  errorMessage: undefined,
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
        posts: action.payload,
      };

    case MoviesTypes.GET_MOVIES_FAILURE:
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
