import React from "react";
import EpisodeInfo from "./EpisodeInfo";
import SideDetail from "../SideDetail";
import { useLocation } from 'react-router-dom';

const PodcastDetail = () => {
const location = useLocation();
const data = location.state;
    return(
    <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md flex justify-start justify-around	 ">
       
    <SideDetail  image={data.image} title={data.title} author={data.author} description={data.description}/>
    <EpisodeInfo episode={data.e}/>
  
    </div>
   
  );
};

export default PodcastDetail;
