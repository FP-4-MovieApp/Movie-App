import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../redux/reducers/movieActions";

const Detail = () => {
  const dispatch = useDispatch();
  const { details, isLoading, error } = useSelector((state) => state.movies);
  const { id } = useParams();

  // Fetch details on component mount
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

  // Extract relevant data from details object
  const { title, release_date, overview, poster_path, trailer_url } = details;

  return (
    <div className="flex flex-col items-center p-8">
      {/* Trailer section */}
      {trailer_url && (
        <div className="w-full mb-8 aspect-video rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src={trailer_url}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <img
        className="w-64 rounded-md"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      <h2 className="text-3xl font-bold mt-8">{title}</h2>

      <p className="text-lg font-medium text-gray-500 mt-2">
        Release Date: {release_date}
      </p>

      <h3 className="text-2xl font-medium mt-8">Overview</h3>
      <p className="text-lg leading-relaxed">{overview}</p>

      {/* Add additional information and functionalities as needed */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700">
          Add to Watchlist
        </button>
        <button className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-300">
          Read Reviews
        </button>
      </div>

      {/* Render related movies if available */}
      {details.related_movies && (
        <div className="mt-12">
          <h3 className="text-2xl font-medium">Related Movies</h3>
          <ul className="list-none">
            {details.related_movies.map((movie) => (
              <li key={movie.id}>
                <a
                  href={`/movies/${movie.id}`}
                  className="text-lg font-medium hover:underline"
                >
                  {movie.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Detail.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    trailer_url: PropTypes.string,
  }),
};

export default Detail;
