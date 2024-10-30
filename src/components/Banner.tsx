import React from "react";
import homepage from "../assets/homepage.png";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


const Banner = () => {
  return (
    <>
      <div>
        <img src={homepage} alt="not available" />
      </div>
      <div className="w-[80%] justify-center items-center bg-purple-300 flex">
        <div>
            Looking For
            <input type="text" />
        </div>
        <div>
            Looking For
            <input type="text" placeholder="dshd"/>
        </div>
        <div>
            Looking For
            <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Banner;
