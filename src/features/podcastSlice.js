import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createSelector } from "@reduxjs/toolkit";
const API_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const podcastslista= []
export const podcastSlice = createSlice({
  name: "podcast",
  initialState: {
    data:[]
  },
  

  reducers: {
    getPodcast: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const getPodcastAsync = () => async dispatch => {
  try{
    const response = await axios.get(API_URL);
    dispatch(getPodcast(response.data.feed.entry));
  } catch (error) {
    console.log(error);
  }
}

export const { getPodcast } = podcastSlice.actions;
export const showPodcast = (state)  => state.podcast.data;
export const getPodcastById = id =>
    createSelector(
        state => state.podcast.data,
        data => data.filter(podcast => podcast.id.attributes["im:id"] === id ? podcast : null)
    )
export default podcastSlice.reducer;