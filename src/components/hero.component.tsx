"use client";
import React, { useState } from "react";
import mobile from "../assert/Anniversary (7) 1.png";
import Image from "next/image";
import money1 from "../assert/Anniversary (8) 1.png";
import money2 from "../assert/Anniversary (8) 2.png";
import money3 from "../assert/Anniversary (8) 3.png";
import money4 from "../assert/Anniversary (8) 4.png";
import money5 from "../assert/Anniversary (8) 5.png";
import Modal from "./model";

const HeroComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="px-5 md:px-0">
      <div className="flex items-center justify-center mt-5">
        <div className="w-220 md:w-320 h-10 bg-blue-100 rounded-3xl flex items-center justify-center px-3 md:px-10 gap-4 md:gap-20 text-xs md:text-sm">
          <span className="text-blue-700">Refer</span>
          <span>Benefits</span>
          <span>FAQs</span>
          <span>Support</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-blue-100 shadow-lg rounded-lg flex flex-col items-center md:flex-row my-10 relative">
        <div className="flex-1 text-center md:text-left pl-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Let&rsquo;s Learn <br /> & Earn
          </h1>
          <p className="text-xl mt-4">
            <br />
            Get a chance to win <br /> up-to{" "}
            <span className="font-bold text-blue-600">Rs. 15,000</span>
          </p>

          <button
            onClick={openModal}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700"
          >
            Refer Now
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0 relative z-50">
          <Image
            src={mobile}
            alt="Learn & Earn"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg z-40"
          />
        </div>
        <div className="absolute bottom-[-19px] md:bottom-5 left-[40px] md:left-[675px] transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Image src={money1} alt="Money" width={80} height={80} />
        </div>
        <div className="absolute top-[370px] md:top-[54px] right-[100px] md:right-[278px] transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-20">
          <Image src={money2} alt="Money" width={80} height={80} />
        </div>
        <div className="absolute top-[450px] md:top-[270px] right-[22px] md:right-[53px] transform translate-x-1/3 md:translate-x-1/2 -translate-y-1/2 z-10">
          <Image src={money3} alt="Money" width={80} height={80} />
        </div>
        <div className="absolute top-5 left-11 md:left-12 transform -translate-x-1/2 -translate-y-[20px]">
          <Image src={money4} alt="Money" width={80} height={80} />
        </div>
        <div className="absolute top-6 right-0 transform -translate-x-1/4 md:-translate-x-1/2 -translate-y-[23px]">
          <Image src={money5} alt="Money" width={80} height={80} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroComponent;
