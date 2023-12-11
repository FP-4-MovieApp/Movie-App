import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../redux/reducers/movieActions";

const Detail = () => {
  const dispatch = useDispatch();
  const { details, isLoading, error } = useSelector((state) => state.movies);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  if (isLoading) {
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center text-xl font-semibold">
        Error: {error}
      </p>
    );
  }

  if (!details) {
    return (
      <p className="text-center text-gray-500 text-xl font-semibold">
        No movie found
      </p>
    );
  }

  const { title, release_date, overview, poster_path, genres } = details;

  return (
    <div className="flex flex-col lg:flex-row items-center p-8">
      <img
        className="w-64 h-auto rounded-md lg:mr-8"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="text-lg font-medium text-gray-500 mt-2">
          Release Date: {release_date}
        </p>

        <div className="flex items-center text-lg font-medium text-gray-500 mt-2">
          <span>Genre:</span>
          <ul className="ml-2 flex flex-row gap-2">
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <h3 className="text-2xl font-medium mt-4">Overview</h3>
        <p className="text-lg leading-relaxed">{overview}</p>

        <div className="flex justify-center mt-8">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700">
            Add to Watchlist
          </button>
          <button className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300">
            Read Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default Detail;
