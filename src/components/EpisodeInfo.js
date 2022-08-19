import { render } from "@testing-library/react";
import React from "react";
import ReactPlayer from 'react-player/lazy'
import { useParams, Link, useLocation } from "react-router-dom";

const EpisodeInfo = () => {
  const location = useLocation();
  const data = location.state;
  
  return
     
        data.map((episode, index) => (
          render(
            <div className="flex flex-col justify-center items-center">
            {episode.trackName }
            <ReactPlayer url={episode.previewUrl} controls={true} width="100%" height="100%" />
            </div>
          )
        ))
       

    
}

export default EpisodeInfo;