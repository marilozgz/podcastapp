import React from "react";

const PodcastCard = ({  title, author , image}) => {
  return (
  
    <div
      id="posdcast-list"
      className="container mt-10 mb-10 mx-auto px-4 mt-5 pb-5 flex flex-row justify-between"
    >
      <div className="flex flex-col	mt-10 justify-center bg-white drop-shadow-md rounded-lg p-1.5  pb-30">
        <img
          className="w-28 h-28 -mt-20 mx-auto justify-center rounded-full border-4 border-slate-40 object-cover"
          src={image}
        />
        <div className="flex flex-col px-5 py-1">
          <h4 id="title" className="font-bold text-lg text-pink-600">
          {title}
          </h4>
          <p id="author" className="mt-1 flex-1 font-light text-sm text-slate-500">
          {author}
          </p>
        </div>
      </div>
    </div>
  
  );
};

export default PodcastCard;