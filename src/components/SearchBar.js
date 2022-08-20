import React from "react";
const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = listPodcast.filter(
        (podcast) =>
          podcast.title.label
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          podcast["im:artist"].label
            .toLowerCase()
            .includes(searchInput.toLowerCase())
      );

      setFilteredResults(filteredData);
      console.log(filteredData);
    } else {
      setFilteredResults(listPodcast);
    }
  };
const SearchBar = ({ podcast, setSearchResults }) => {
    return(
        <div
          id="search-header"
          className="md:container md:mx-auto px-4 mt-10 mb-20 pb-5 flex flex-row justify-end"
        >
          <div className="flex-justify-self-start w-32 py-1">
            <span className="inline-block py-1.5 px-2.5 text-xl leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
              {numpocast}
            </span>
          </div>
          <div className="flex-justify-self-end w-72">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="buscar"
              placeholder="Filter podcasts..."
              onChange={searchItems}
            />
          </div>
        </div>
    )
}

export default SearchBar;