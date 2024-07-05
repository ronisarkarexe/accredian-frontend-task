"use client";
import { ChevronDown, ChevronRight, GraduationCap } from "lucide-react";
import React, { useState } from "react";
import group from "../assert/Group.png";
import Image from "next/image";

const programs = [
  {
    name: "Professional Certificate Program in Product Management",
    referrer: "₹ 7,000",
    referee: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrer: "₹ 9,000",
    referee: "₹ 10,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrer: "₹ 10,000",
    referee: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrer: "₹ 10,000",
    referee: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrer: "₹ 10,000",
    referee: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrer: "₹ 10,000",
    referee: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrer: "₹ 10,000",
    referee: "₹ 10,000",
  },
];

const allEvents = [
  {
    name: "Product Management",
  },
  {
    name: "Strategy & Leadership",
  },
  {
    name: "Business Management",
  },
  {
    name: "Fintech",
  },
  {
    name: "Senior Management",
  },
  {
    name: "Data Science",
  },
  {
    name: "Digital Transformation",
  },
  {
    name: "Business Analytics",
  },
];

const ReferralComponent = () => {
  const [eventActive, setEventActive] = useState(0);
  return (
    <div className="my-10">
      <h1 className="text-center font-bold">
        What are the <span className="text-blue-500">Referral Benefits?</span>{" "}
      </h1>

      <div className="max-w-5xl mx-auto my-10">
        <div className="flex items-center justify-end my-1">
          <span className="mr-3 text-sm">Enrolled</span>
          <input
            type="checkbox"
            className="toggle toggle-xs toggle-info"
            defaultChecked
          />
        </div>
        <div className="flex">
          <div style={{ minWidth: "300px" }}>
            <div className="w-full shadow-2xl rounded-lg">
              <ul>
                {allEvents.map((event, index) => (
                  <div key={index}>
                    <li
                      className={`text-start font-medium uppercase text-sm ${
                        eventActive === index ? "bg-blue-600 text-white" : ""
                      } p-5 flex items-center justify-between rounded-tl-lg rounded-tr-lg`}
                    >
                      <span>{event.name}</span>
                      <ChevronRight
                        className={`${
                          eventActive === index ? "w-5 h-5" : "w-4 h-4"
                        }`}
                      />
                    </li>
                    {index !== allEvents.length - 1 && <hr className="mx-4" />}
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 px-4 ml-5">
            <div style={{ minWidth: "700px" }}>
              <table className="border-collapse shadow-xl rounded-b-lg rounded-t-lg">
                <thead>
                  <tr className="border-none bg-blue-200 text-blue-600">
                    <th className="border-x-0 py-2 px-4 text-left w-1/2">
                      Programs
                    </th>
                    <th className="border-x py-2 px-4 text-left w-1/5">
                      Referrer Bonus
                    </th>
                    <th className="border-x-0 py-2 px-4 text-left w-1/5">
                      Referee Bonus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program, index) => (
                    <tr key={index}>
                      <td className="border-x-0 py-2 px-4 flex items-start justify-start">
                        <Image src={group} width={30} height={30} alt="group" />
                        <span className="ml-2">{program.name}</span>
                      </td>
                      <td className="border-x py-2 px-4 text-center">
                        {program.referrer}
                      </td>
                      <td className="border-x-0 py-2 px-4 text-center">
                        {program.referee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-3">
          <button className="mt-6 px-6 py-3 bg-white rounded-md border border-gray-300 flex items-center justify-center">
            <span className="mr-3"> Show More</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700">
          Refer Now
        </button>
      </div>
    </div>
  );
};

export default ReferralComponent;
