import React from "react";
import img from "../assert/carv.png";
import Image from "next/image";
import icon from "../assert/div.w-20.png";
import { ChevronRight } from "lucide-react";

const GetInTouchComponent = () => {
  return (
    <div style={{ maxWidth: "1200px" }} className="mx-auto my-10 px-5 md:px-0">
      <div className="relative bg-blue-500 rounded-lg py-16 md:py-0">
        <div className="relative z-50 flex items-center justify-end md:justify-center md:items-start">
          <Image
            src={img}
            alt="Learn & Earn"
            width={600}
            height={400}
            className="w-full md:max-w-4xl h-auto rounded-lg z-40 md:rounded-none"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50 w-full px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
            <div className="flex gap-3 items-center mb-4 md:mb-0">
              <div>
                <Image src={icon} width={50} height={50} alt="icon" />
              </div>
              <div className="text-white">
                <h1 className="text-sm">
                  Want to delve deeper into the program?
                </h1>
                <h2 className="text-xs">
                  Share your details to receive expert insights from our program
                  team!
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-blue-500 border border-blue-500 rounded-md shadow-md flex">
                <span className="mr-2 md:mr-3">Get in Touch</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComponent;
