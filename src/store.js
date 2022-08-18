import { configureStore } from "@reduxjs/toolkit";
import podcastSlice from "./features/podcastSlice";

export default configureStore({
    reducer: {
        podcast:podcastSlice,
    }
});