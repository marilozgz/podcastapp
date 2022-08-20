import React from "react";
import ReactPlayer from 'react-player/lazy'
import { useLocation } from "react-router-dom";

const EpisodeInfo = () => {
  const location = useLocation();
  const data = location.state.e;
 
  return(
     <div>
       

              <div className="flex flex-col justify-center items-center">
              <h1>{data.trackName}</h1>
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