import PodcastList from "./PodcastList";
import { useSelector, useDispatch } from "react-redux";
import { showPodcast, getPodcastAsync } from "../features/podcastSlice";
import React , {  useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPodcastAsync());
     
 } , [dispatch]);

  return (
    <div className="App">
      {/*esto es el header*/}
      <div className="container mx-auto px-4 mt-10 pb-5 flex flex-row shadow-md ">
        <div className=" flex-initial">
          <p className="text-2xl font-semibold text-sky-600"> Podcaster</p>
        </div>
      </div>
      {/* fin del header*/}

      {/*esto es el contendedor principal*/}
     <PodcastList/>
   
    </div>
  );
}

export default App;
