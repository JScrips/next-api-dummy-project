import React from "react";
import bored from "../pages/bored";

const postcards = ({post}) => {
const {title, link, content} = post


  return <article className="border-2 border-black">

 <a href={link} className="hover:underline"><h1 className="text-3xl font-semibold text-orange-600 py-2"> {title} </h1></a>
  {content} 
 

  </article>;
};

export default postcards;
