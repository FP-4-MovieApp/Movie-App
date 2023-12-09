import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrending,
  fetchDiscover,
  fetchNowPlaying,
} from "../../redux/reducers/movieActions";
import MovieCard from "../../components/moviecard";

const Home = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { nowPlaying, discover, trending, isLoading, error } = useSelector(
    (state) => state.movies
  );
  // const handleClick = () => {
  //   navigate(`/detail/:id`);
  // };
  useEffect(() => {
    const fetchData = async () => {
      // Dispatch the fetch actions
      dispatch(fetchTrending());
      dispatch(fetchNowPlaying());
      dispatch(fetchDiscover());
    }; // Fetch data on initial component mount

    return () => {
      fetchData();
    };
  }, []);

  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-20">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        // Map through searchResults and render components for each result
        <div className="flex flex-col">
          <h1>Now Playing</h1>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {nowPlaying.map((result) => (
              <MovieCard key={result.id} movie={result} />
            ))}
          </div>
          <h1>Trending</h1>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {trending.map((result) => (
              <MovieCard key={result.id} movie={result} />
            ))}
          </div>
          <h1>Discover</h1>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {discover.map((result) => (
              <MovieCard key={result.id} movie={result} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
