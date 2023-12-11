import { useEffect } from "react";
import ScrollableCard from "../../components/scroll";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrending,
  fetchDiscover,
  fetchNowPlaying,
} from "../../redux/reducers/movieActions";

const Home = () => {
  const dispatch = useDispatch();
  const { nowPlaying, discover, trending, isLoading, error } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchTrending());
      dispatch(fetchNowPlaying());
      dispatch(fetchDiscover());
    };

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
        // Render ScrollContainers when data is available
        <div className="flex flex-col gap-4">
          {/* Now Playing Section */}
          <h1 className="font-bold text-4xl">Now Playing</h1>
          <ScrollableCard data={nowPlaying} />

          {/* Trending Section */}
          <h1 className="font-bold text-4xl">Trending</h1>
          <ScrollableCard data={trending} />

          {/* Discover Section */}
          <h1 className="font-bold text-4xl">Discover</h1>
          <ScrollableCard data={discover} />
        </div>
      )}
    </div>
  );
};

export default Home;
