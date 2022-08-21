import { configureStore, combineReducers } from "@reduxjs/toolkit";
import podcastSlice from "../features/podcastSlice";
import episodeSlice from "../features/episodeSlice";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web
import expireReducer from "redux-persist-expire";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducerExpireDate = 24*60*60*1000; // 24 hours

const persistConfig = {
  key: "root",
  storage,
  whiteList: [ "episodes"],
transforms: [expireReducer( 
    {
        expire: reducerExpireDate,
        expireKey: "podcast"
    }
)]
};

const reducers = combineReducers({
  podcasts: podcastSlice,
  episodes: episodeSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
