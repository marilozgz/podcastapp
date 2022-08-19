import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPodcastById } from "../features/podcastSlice";

const SideDetail = () => {
  const { id } = useParams();
  const detail = useSelector(getPodcastById(id));
  return (
    <div className="basis-1/3">
      {detail.map((podcast, index) => (
        <div className=" shadow-lg bg-white max-w-sm" key={index}>
          <img
            className="p-8 bg-white mx-auto rounded max-w-sm"
            src={podcast["im:image"][2].label}
            alt=""
          />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              {podcast.title.label}
            </h5>
            <p className="text-gray-700 text-base mb-4 italic">
              by {podcast["im:artist"].label}
            </p>
            <h5 className="text-gray-900 text-m font-bold mb-2">Description</h5>
            <p className="text-gray-700 text-sm mb-4 italic">
              {podcast.summary.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideDetail;
