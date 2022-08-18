import React from "react";

const PodcastDetail = ({ podcast }) => {
  return (
    <div className="container mx-auto px-4 mt-10 mb-30 pb-5 shadow-md flex justify-start justify-around	 ">
      <div className="basis-1/3">
        <div className=" shadow-lg bg-white max-w-sm">
          
            <img
              className="p-8 bg-white  rounded max-w-sm"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
         
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              Card title
            </h5>
            <p className="text-gray-700 text-base mb-4 italic">
              Some quick example 
              
            </p>
            <h5 className="text-gray-900 text-m font-bold mb-2">
           Description
          </h5>
          <p className="text-gray-700 text-sm mb-4 italic">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
          </div>
        </div>
      </div>
      <div className="flex  flex-col basis-2/3">
        <div className="shadow-lg bg-white pt-7 pb-5 pl-4 content-center text-lg font-bold	">
          Episodes 66
        </div>

        <div className="mt-10 text-left	">
          <table class="min-w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm font-light">
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
