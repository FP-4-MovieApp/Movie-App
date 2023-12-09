import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlaying,
  fetchDiscover,
  fetchTrending,
  searchMovie,
  fetchDetails,
} from "./movieActions";
const initialState = {
  nowPlaying: [],
  discover: [],
  trending: [],
  searchResults: [],
  details: [],
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlaying.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNowPlaying.fulfilled, (state, action) => {
        state.isLoading = false;
        state.nowPlaying = action.payload.results;
        state.error = null;
      })
      .addCase(fetchNowPlaying.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDiscover.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDiscover.fulfilled, (state, action) => {
        state.isLoading = false;
        state.discover = action.payload.results;
        state.error = null;
      })
      .addCase(fetchDiscover.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTrending.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trending = action.payload.results;
        state.error = null;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(searchMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchResults = action?.payload?.results;
        state.error = null;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action?.payload;
        state.error = null;
        console.log(state.details);
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default movieSlice.reducer;
