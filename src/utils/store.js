import { configureStore } from "@reduxjs/toolkit";
import podcastSlice from "../features/podcastSlice";
import episodeSlice from "../features/episodeSlice";
const store= configureStore({
    reducer: {
        podcasts:podcastSlice,
        episodes:episodeSlice,
    }
});

export default store;