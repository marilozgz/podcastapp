import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import { useSelector } from "react-redux";

const Header = () => {
  const loading = useSelector((state) =>  state.persistedReducer.podcasts.loading);
  const loadingepisodes = useSelector((state) =>  state.persistedReducer.episodes.loading);


    return(
        <div className="container mx-auto px-4 mt-10 pb-5 flex flex-row shadow-md justify-between ">
        <div className=" flex-initial">
         <Link to="/"> <p className="text-2xl font-semibold text-sky-600"> Podcaster</p></Link>
    
        </div>
        {
          loading ? (    <div className="flex-end"> <ReactLoading type={'spin'} color={'blue'} height={40} width={40} /></div>  
          ): ''}
          {
            loadingepisodes ? (    <div className="flex-end"> <ReactLoading type={'spin'} color={'blue'} height={40} width={40} /></div>  
            ): ''}
      </div>
      
    )
}

export default Header;