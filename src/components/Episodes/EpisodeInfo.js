import React from "react";
import ReactPlayer from 'react-player/lazy'
import { useLocation } from "react-router-dom";

const EpisodeInfo = () => {
  const location = useLocation();
  const data = location.state.e;
 
  return(
    <div className="flex  flex-col basis-1/2">
       

              <div className="flex flex-col justify-center items-center mb-10">
              <h1 className="text-lg	font-bold">{data.trackName}</h1>
              </div>
              <div className="text-xs	font-light mb-10">
              <p>{data.description}</p>

              
              </div>
              <ReactPlayer url={data.previewUrl}  width="400px"
              height="50px"
              playing={false}
              controls={true}/>
       
      
      </div>
  );
          

       

    
}

export default EpisodeInfo;