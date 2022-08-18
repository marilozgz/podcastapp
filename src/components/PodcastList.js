import React from "react";
import PodcastCard from "./PoscastCard";
import { useDispatch, useSelector } from "react-redux";
import { retrivePodcast, findPocastById } from "../features/podcastSlice";


const PodcastList = ({ }) => {
    const podcasts = useSelector(state => state.podcasts.podcasts);
    const initFetch = useCallback(() => {
        dispatch(retrivePodcast());
      }, [dispatch])
    

    return(
        <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md ">
        {/*esto es el buscador*/}
        <div>
        <div
          id="search-header"
          className="md:container md:mx-auto px-4 mt-10 mb-20 pb-5 flex flex-row justify-end"
        >
          <div
            data-testId="search-input"
            className="flex-justify-self-start w-32 py-1"
          >
            <span class="inline-block py-1.5 px-2.5 text-xl leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
              100
            </span>
          </div>
          <div className="flex-justify-self-end w-72">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="buscar"
              placeholder="Filter podcasts..."
            />
          </div>
        </div>
        {podcasts && podcasts.map(podcast => (
        <PodcastCard
        key={podcast.id}
        title={podcast.title}
        author={podcast.author}
        />
        ))}
        </div>
      </div>
    );
}

export  default PodcastList;