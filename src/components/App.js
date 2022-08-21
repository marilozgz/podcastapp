import React , {  useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
/* Imports components */
import PodcastDetail from "./Podcast/PodcastDetail";
import Home from "./Home/Home";
import Header from "./Header";
import EpisodeDetail from "./Episodes/EpisodeDetail";
function App() {

  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
        <Route path="/podcast/:idPodcast/episode/:idEpisode" element={<EpisodeDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
