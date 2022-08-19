import React, { useEffect } from "react";
import PodcastCard from "./PoscastCard";
import { useSelector} from "react-redux";
import { showPodcast } from "../features/podcastSlice";

const PodcastList = ({}) => {
  const listpodcast = useSelector(showPodcast);


  const arrayChunk = (listpodcast, n) => {
    const array = listpodcast.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
  return (
    <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md ">
      {/*esto es el buscador*/}
      <div>
        <div
          id="search-header"
          className="md:container md:mx-auto px-4 mt-10 mb-20 pb-5 flex flex-row justify-end"
        >
          <div className="flex-justify-self-start w-32 py-1">
            <span className="inline-block py-1.5 px-2.5 text-xl leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
              100
            </span>
          </div>
          <div className="flex-justify-self-end w-72">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="buscar"
              placeholder="Filter podcasts..."
            />
          </div>
        </div>
        {arrayChunk([...Array(9).keys()], 3).map((row, i) => (
          <div className="grid grid-cols-4 gap-4" key={i}>
        {listpodcast.map((podcast,index) => (
          <PodcastCard title= {podcast.title.label} author={podcast['im:artist'].label} image ={podcast['im:image'][2].label} id={podcast.id.attributes["im:id"]} key={podcast.id.attributes["im:id"]}/>
        
        ))}
        </div>
        ))}
      </div>

    </div>
  );
};

export default PodcastList;