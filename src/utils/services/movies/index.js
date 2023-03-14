import axios from "axios";

import * as config from "../../constants";

export const getMovies = () => {
  try {
    return axios.get(config.MOVIES);
  } catch (error) {
    //
  }
};
