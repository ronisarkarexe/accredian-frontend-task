import React from "react";
import Image from "next/image";
import referImg from "../assert/18512590-ai (1) 1.png";
import icon1 from "../assert/Layer_2.png";
import icon2 from "../assert/Layer_10.png";
import icon3 from "../assert/Group 22036.png";

const ReferComponent = () => {
  return (
    <div className="bg-blue-100">
      <div className="relative h-600 bg-cover bg-center  my-10 py-8">
        <h1 className="text-xl mb-8 text-center font-bold">
          How Do I <span className="text-blue-500">Refer?</span>
        </h1>
        <div className="relative z-50 flex items-center justify-center">
          <Image
            src={referImg}
            alt="Learn & Earn"
            width={900}
            height={900}
            className="max-w-4xl h-auto rounded-lg z-40"
          />
        </div>

        <div className="absolute top-1/2 left-[420px] transform -translate-x-1/2 -translate-y-1/3 z-50">
          <div className="flex flex-col items-center">
            <Image src={icon1} alt="Money" width={50} height={50} />
            <p className="text-center mt-1 text-xs">
              <br />
              Submit referrals easily via <br /> our website&rsquo;s referral{" "}
              <br /> section.
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50">
          <div className="flex flex-col items-center">
            <Image src={icon2} alt="Money" width={50} height={50} />
            <p className="text-center mt-0 text-xs">
              <br />
              Earn rewards once your <br /> referral joins an Accredian <br />{" "}
              program.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-[300px] transform -translate-x-1/2 -translate-y-1/3 z-50">
          <div className="flex flex-col items-center">
            <Image src={icon3} alt="Money" width={50} height={50} />
            <p className="text-center mt-1 text-xs">
              <br />
              Both parties receive a <br /> bonus 30 days after <br /> program
              enrollment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-3">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferComponent;
