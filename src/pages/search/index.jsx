import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchMovie } from "../../redux/reducers/movieActions";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/moviecard";
const Search = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const { searchResults, isLoading, error } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    dispatch(searchMovie(searchQuery));
  }, [dispatch, searchQuery]);
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          // Map through searchResults and render components for each result
          searchResults.map((result) => (
            <MovieCard key={result.id} movie={result} />
            // <div key={result.id} className="border p4">
            //   {result.name ? <h3>{result.name}</h3> : <h3>{result.title}</h3>}

            //   {console.log(result)}
            // </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
