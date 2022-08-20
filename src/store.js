import { configureStore } from "@reduxjs/toolkit";
import podcastSlice from "./features/podcastSlice";

const store= configureStore({
    reducer: {
        podcast:podcastSlice,
    }
});

export default store;