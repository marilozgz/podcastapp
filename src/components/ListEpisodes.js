import React ,{ useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {convertMsToTime,formatDate,capitalize} from "../utils/helpers";



const TableEpisodes = ({  title, author , image, description}) => {
   const [episode, setEpisode] = useState([]);
    const { id } = useParams();
    const [numEpisodes, setNumEpisodes] = useState(0);
    const api = 'https://corsproxy.io/?' + encodeURIComponent('https://itunes.apple.com/lookup?id='+id+'&media=podcast&entity=podcastEpisode&limit=100');

    useEffect(() => {
         const getEpisodes = async () => {
            
            const res = await fetch(api);
            const data = await res.json();
            setNumEpisodes(data.resultCount);
            setEpisode(data.results);
            
        }
        getEpisodes();
    } , [api]);

    
    return(
        
        <div className="flex  flex-col basis-1/2">
        
        <div className="shadow-lg bg-white pt-7 pb-5 pl-4 content-center text-lg font-bold	">
          Episodes {numEpisodes}
        </div>
        <div className="mt-10 text-left	">
          <table className="table-fixed min-w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
                {episode.slice(1, -1).map((e, index) => (
              <tr key={index} className="text-xs">
                <td className="text-xs w-1/2 px-4 py-2 text-sky-800	" ><Link state={{author,title,image, description, e}} to={`/podcast/${id}/episode/${e.trackId}`} >{capitalize(e.trackName)}</Link></td>
                <td className="text-xs w-1/4 px-4 py-2">{formatDate(e.releaseDate)}</td>
                <td className="text-xs w-1/4 px-4 py-2">{convertMsToTime(e.trackTimeMillis)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  
    );
    
}

export default TableEpisodes;