import { ChevronUp } from "lucide-react";
import React from "react";

const QuestionComponent = () => {
  return (
    <div className="my-10 px-4 md:px-0">
      <h1 className="text-center font-bold">
        Frequently Asked <span className="text-blue-500">Questions</span>{" "}
      </h1>

      <div style={{ maxWidth: "1000px" }} className="mx-auto">
        <div className="flex flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 ">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-md shadow-xl border border-blue-400 w-full text-center">
              Eligibility
            </button>
            <br />
            <button className="mt-6 px-6 py-3 bg-white rounded-md border border-gray-300 flex items-center justify-center text-gray-500 w-full text-center">
              How to Use?
            </button>
            <br />
            <button className="mt-1 px-6 py-3 bg-white rounded-md border border-gray-300 flex items-center justify-center text-gray-500 w-full text-center">
              Terms & Conditions
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="space-y-4 lg:ml-4">
              <div className="group [&_summary::-webkit-details-marker]:hidden">
                <div className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg pb-4 px-4 text-gray-900">
                  <h2 className="font-medium text-blue-500">
                    Do I need to have prior Product Management and Project
                    Management experience to enroll in the program?
                  </h2>
                  <ChevronUp className="w-5 h-5" />
                </div>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  No, the program is designed to be inclusive of all levels of
                  experience. All topics will be covered from the basics, making
                  it suitable for individuals from any field of work.
                </p>
              </div>
              <div className="group [&_summary::-webkit-details-marker]:hidden">
                <div className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900">
                  <h2 className="font-medium">
                    What is the minimum system configuration required?
                  </h2>
                  <ChevronUp className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
