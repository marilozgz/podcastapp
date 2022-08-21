import { configureStore } from "@reduxjs/toolkit";
import podcastSlice from "./features/podcastSlice";

const store= configureStore({
    reducer: {
        podcasts:podcastSlice,
    }
});

export default store;