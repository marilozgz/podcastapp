import React , {  useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
/* Imports components */
import PodcastDetail from "./PodcastDetail";
import PodcastList from "./PodcastList";
import {  getPodcastAsync } from "../features/podcastSlice";
import Header from "./Header";
import EpisodeDetail from "./EpisodeDetail";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcastAsync());
     
 } , [dispatch]);

  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
        <Route path="/podcast/:idPodcast/episode/:idEpisode" element={<EpisodeDetail />} />
        <Route path="*" element={<PodcastList />} />
      </Routes>
    </div>
  );
}

export default App;
