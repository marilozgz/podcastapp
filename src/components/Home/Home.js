import React , { useEffect}  from "react";
import { useDispatch } from "react-redux";
import { getPodcastAsync,getAllPodcast} from "../../features/podcastSlice";

import PodcastList from "./PodcastList";
import { useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const listPodcast = useSelector(getAllPodcast);


    useEffect(() => {
        dispatch(getPodcastAsync());
    } , []);

    return(
       <>  

       <PodcastList podcasts={listPodcast}  /> </>
       
    )
}

export default Home;
