import Image from "next/image";
import { IMAGE_API } from "utils/constants/tmdbConstants";

const MovieListItem = ({movie}) => {

  return (
    <div className="movie-item col-md-2">
      <Image
        width={220}
        height={320}
        alt="Logo"
        src={IMAGE_API + movie.poster_path}/>
        <div className="movie-item-details">
          <span>{movie.original_title}</span>
        </div>
    </div>
  );
}

export default MovieListItem;