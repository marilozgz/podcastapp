import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <div className="container mx-auto px-4 mt-10 pb-5 flex flex-row shadow-md ">
        <div className=" flex-initial">
         <Link to="/"> <p className="text-2xl font-semibold text-sky-600"> Podcaster</p></Link>
        </div>
      </div>
    )
}

export default Header;