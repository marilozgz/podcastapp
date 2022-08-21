import React ,{ useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {convertMsToTime,formatDate} from "../../utils/helpers";
import { useDispatch } from "react-redux";
import{getAllEpisodes,getEpisodesAsync} from "../../features/episodeSlice";
import { useSelector } from "react-redux";

const TableEpisodes = ({  title, author , image, description}) => {
    const { id } = useParams();
    const [numEpisodes, setNumEpisodes] = useState(0);

    const dispatch = useDispatch();
    const listEpisodes = useSelector(getAllEpisodes);
    useEffect(() => {
        dispatch(getEpisodesAsync(id));
    } , [id]);
    useEffect(() => {
      if (listEpisodes.length) {
          setNumEpisodes(listEpisodes.length);
      }
    }, [listEpisodes]);
  
    
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
                {listEpisodes.slice(1, -1).map((e, index) => (
              <tr key={index} className="text-xs">
                <td className="text-xs w-1/2 px-4 py-2 text-sky-800	" ><Link state={{author,title,image, description, e}} to={`/podcast/${id}/episode/${e.trackId}`} >{e.trackName}</Link></td>
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