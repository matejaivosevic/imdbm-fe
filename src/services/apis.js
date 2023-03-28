import axios from "axios";
import { API_KEY, BASE_URL } from "../utils/constants/tmdbConstants";

export const genresInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
