// import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const handleMouseEnter = () => {
  //     setIsHovered(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovered(false);
  //   };
  let poster = "";

  if (movie.poster_path) {
    poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  } else if (movie.backdrop_path) {
    poster = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  } else if (movie.profile_path) {
    poster = `https://image.tmdb.org/t/p/original/${movie.profile_path}`;
  }
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="min-w-[11rem] h-64 rounded-2xl overflow-hidden shadow-lg relative"
        //   onMouseEnter={handleMouseEnter}
        //   onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full"
          src={poster}
          alt={movie.name ? movie.name : movie.title}
        />

        <div className="card-image">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              {movie.name ? movie.name : movie.title}
            </h2>
            <p>
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>
            {/* Add other movie details here */}
          </div>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    profile_path: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
    // Add more specific PropTypes for other properties if available
  }),
};
export default MovieCard;
