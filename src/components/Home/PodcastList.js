import React, { useState } from "react";
import PodcastCard from "./PoscastCard";
import { getAllPodcast } from "../../features/podcastSlice";
import { useSelector } from "react-redux";

const PodcastList = () => {
  const podcasts = useSelector(getAllPodcast);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilterdData] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState("100");
  const handleSubmit = (e) => e.preventDefault();

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = podcasts.filter(
        (podcast) =>
          podcast.title.label
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          podcast["im:artist"].label
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      );
      setFilterdData(filteredData);
      setNumberOfItems(filteredData.length);
    } else {
      setFilterdData(podcasts);
    }
  };

  return (
    <div>
      <div
        id="search-header"
        className="md:container md:mx-auto px-4 mt-10 mb-20 pb-5 flex flex-row justify-end"
      >
        <div className="flex-justify-self-start w-32 py-1">
          <span className="inline-block py-1.5 px-2.5 text-xl leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
            {numberOfItems}
          </span>
        </div>
        
        <div className="flex-justify-self-end w-72">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="buscar"
              placeholder="Filter podcasts..."
              onChange={(e) => searchItems(e.target.value)}
            />
          </form>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {filteredData.map((podcast, index) => (
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
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {podcasts.map((podcast, index) => (
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
      )}
    </div>
  );
};

export default PodcastList;
