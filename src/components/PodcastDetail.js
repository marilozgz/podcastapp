import React from "react";
import { useParams } from "react-router-dom";
import TableEpisodes from "./ListEpisodes";
import SideDetail from "./SideDetail";
const PodcastDetail = () => {
const {id} = useParams();

    return(
    <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md flex justify-start justify-around	 ">
        <SideDetail/>
    
        <TableEpisodes/>
  
    </div>
   
  );
};

export default PodcastDetail;
