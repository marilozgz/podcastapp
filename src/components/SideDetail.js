import React from "react";

import { useParams } from "react-router-dom";

const SideDetail = ({  description,title, author , image}) => {
  const { id } = useParams();
  if(author){
  
  return (
    <div className="basis-1/3">
     
        <div className=" shadow-lg bg-white max-w-sm" key={title}>
          <img
            className="p-8 bg-white mx-auto rounded max-w-sm"
            src={image}
            alt=""
          />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              {title}
            </h5>
            <p className="text-gray-700 text-base mb-4 italic">
              by {author}
            </p>
            <h5 className="text-gray-900 text-m font-bold mb-2">Description</h5>
            <p className="text-gray-700 text-sm mb-4 italic">
              {description}
            </p>
          </div>
        </div>
    </div>
  );
  }
  else{
    return(<p>hola</p>)
    
  }     

};

export default SideDetail;
