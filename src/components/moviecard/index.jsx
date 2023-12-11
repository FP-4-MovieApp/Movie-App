// import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  let poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="min-w-[11rem] rounded-2xl overflow-hidden shadow-lg relative">
        <img className="w-full" src={poster} alt={movie.title} />

        <div className="card-image">
          <div className="text-white text-center">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p>{movie.release_date.split("-")[0]}</p>
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
