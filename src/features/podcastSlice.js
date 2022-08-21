import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSelector } from "@reduxjs/toolkit";
const API_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const getPodcastAsync = createAsyncThunk(
  "podcasts/getPodcastAsync",
  async () => {
    const response = await axios.get(API_URL);
    return response.data.feed.entry;
  }
);

export const podcastSlice = createSlice({
  name: "podcasts",
  initialState: {
    podcasts: [],
    loading: false

  },

  extraReducers: {
    [getPodcastAsync.pending]: (state) => {
      state.loading = true;

    },
    [getPodcastAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.podcasts = payload;
      localStorage.setItem('podcasts', JSON.stringify(payload));
    },
    [getPodcastAsync.rejected]: (state) => {
      state.loading=false
    },
  },
});



//export const getAllPodcast = (state) => state.podcasts.podcasts;

export const getAllPodcast = (state) => {
  return state.persistedReducer.podcasts.podcasts};
export const getPodcastById = (id) =>
  createSelector(
    (state) => state.podcasts.data,
    (data) =>
      data.filter((podcasts) =>
        podcasts.id.attributes["im:id"] === id ? podcasts : null
      )
  );
export default podcastSlice.reducer;
