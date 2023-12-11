import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, options } from "../service/api";

export const fetchNowPlaying = createAsyncThunk(
  "movies/fetchNowPlaying",
  async () => {
    try {
      const response = await api.get("/movie/now_playing", options);
      return response.data;
    } catch (err) {
      throw err.message;
    }
  }
);

export const fetchDiscover = createAsyncThunk(
  "movies/fetchDiscover",
  async () => {
    try {
      const response = await api.get("/discover/movie", options);
      return response.data;
    } catch (err) {
      throw err.message;
    }
  }
);
export const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async (timeWindow = "day") => {
    try {
      const response = await api.get(`/trending/movie/${timeWindow}`, options);
      return response.data;
    } catch (err) {
      throw err.message;
    }
  }
);

export const searchMovie = createAsyncThunk(
  "movies/searchMovie",
  async (searchQuery) => {
    try {
      const response = await api.get(
        `/search/movie?query=${searchQuery}`,
        options
      );

      return response.data;
    } catch (err) {
      throw err.message;
    }
  }
);

export const fetchDetails = createAsyncThunk(
  "movies/fetchDetails",
  async (movieId) => {
    try {
      const response = await api.get(`/movie/${movieId}`, options);
      return response.data;
    } catch (err) {
      throw err.message;
    }
  }
);
