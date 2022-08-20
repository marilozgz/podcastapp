import React, { useEffect, useState } from "react";
import PodcastCard from "../PoscastCard";
import { useSelector } from "react-redux";
import { showPodcast } from "../../features/podcastSlice";

const PodcastList = React.memo(() => {
  const listPodcast = useSelector(showPodcast);
  const numpocast = listPodcast.length;
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  
  const arrayChunk = (listPodcast, n) => {
    const array = listPodcast.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
 
  return (
    <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md ">
      {/*esto es el buscador*/}
      <div>
        
        {searchInput.length > 1
          ? arrayChunk([...Array(9).keys()], 3).map((i) => (
              <div className="grid grid-cols-4 gap-4" key={i}>
                <p>Hola</p>
                {filteredResults.map((podcast, index) => (
                  <PodcastCard
                    title={podcast.title.label}
                    author={podcast["im:artist"].label}
                    image={podcast["im:image"][2].label}
                    description={podcast.summary.label}
                    id={podcast.id.attributes["im:id"]}
                    key={podcast.id.attributes["im:id"]}
                  />
                ))}
              </div>
            ))
          : arrayChunk([...Array(9).keys()], 3).map((i) => (
              <div className="grid grid-cols-4 gap-4" key={i}>
                {listPodcast.map((podcast) => (
                  <PodcastCard
                    title={podcast.title.label}
                    author={podcast["im:artist"].label}
                    image={podcast["im:image"][2].label}
                    description={podcast.summary.label}
                    id={podcast.id.attributes["im:id"]}
                    key={podcast.id.attributes["im:id"]}
                  />
                ))}
              </div>
            ))}
      </div>
    </div>
  );
});

export default PodcastList;
