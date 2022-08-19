import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";




const TableEpisodes = () => {
   const [episode, setEpisode] = useState([]);
    const { id } = useParams();
     const api = 'https://allorigins.win/raw?url=https://itunes.apple.com/lookup?id='+id+'&media=podcast&entity=podcastEpisode&limit=20'
     console.log(api)
    useEffect(() => {
         const getEpisodes = async () => {
            const apiURL =api
            const res = await fetch(apiURL);
            const data = await res.json();
            setEpisode((data.results));
    }
    
    getEpisodes();

    console.log(episode);
         
     } , []);
  


    
    return(
        
        <div className="flex  flex-col basis-2/3">
        
        <div className="shadow-lg bg-white pt-7 pb-5 pl-4 content-center text-lg font-bold	">
          Episodes 66
        </div>
       
        <div className="mt-10 text-left	">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(episode).map((e, index) => (
              <tr key={e.id}>
                <td key={e.id}>{e.title}</td>
                <td key={e.id}>{e.releaseDate}</td>
                <td key={e.id}>{e.duration}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  
    );
    
}

export default TableEpisodes;