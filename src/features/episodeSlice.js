import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisodesAsync = createAsyncThunk(
  "podcasts/getEpisodesAsync",
  async (id) => {
    const response = await axios.get('https://corsproxy.io/?' + encodeURIComponent('https://itunes.apple.com/lookup?id='+id+'&media=podcast&entity=podcastEpisode&limit=100'));
    return response.data.results;
  }
);

export const episodeSlide = createSlice({
  name: "episodes",
  initialState: {
    episodes: [],
    loading: false

  },

  extraReducers: {
    [getEpisodesAsync.pending]: (state) => {
      state.loading = true;

    },
    [getEpisodesAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.episodes = payload;
      localStorage.setItem('episodes', JSON.stringify(payload));
    },
    [getEpisodesAsync.rejected]: (state) => {
      state.loading=false
    },
  },
});



export const getAllEpisodes = (state) => {
  return state.persistedReducer.episodes.episodes};
export default episodeSlide.reducer;
