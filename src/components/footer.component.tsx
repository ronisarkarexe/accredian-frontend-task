import React from "react";
import logo from "../assert/accredainnew.webp.png";
import Image from "next/image";
import { Plus } from "lucide-react";
import link1 from "../assert/Link.png";
import link2 from "../assert/Link (1).png";
import link3 from "../assert/Link (2).png";
import link4 from "../assert/Link (3).png";
import link5 from "../assert/Link (4).png";

const FooterComponent = () => {
  return (
    <div style={{ backgroundColor: "#282828" }}>
      <div style={{ maxWidth: "1200px" }} className="mx-auto py-12">
        <div className="flex items-start justify-between">
          <div className="">
            <Image src={logo} width={80} height={80} alt="logo" />
          </div>
          <div className="">
            <div className="flex items-center justify-center">
              <button className="px-6 py-3  bg-blue-600 text-white rounded-md border border-white">
                Schedule 1-on-1 Call Now
              </button>
            </div>
            <span className="text-xs text-white mt-1">
              Speak with our Learning Advisor
            </span>
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-12 gap-4 mt-4 text-white">
          <div className="col-span-3 ">
            <div className="flow-root">
              <div>
                <h1 className="text-xl mb-4">Programs</h1>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">DataScience & AI</h2>

                    <span className="relative size-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45 text-sm"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur,
                  </p>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Product Management</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Business Analytics</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">
                      digital Transformation
                    </h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Business Management</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Project Management</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">
                      Strategy & Leadership
                    </h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Senior Management</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>

                <details
                  className="group py-2 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h2 className="text-sm font-medium">Fintech</h2>

                    <span className="relative size-5 shrink-0">
                      <Plus className="w-4 h-4" />
                    </span>
                  </summary>
                </details>
              </div>
            </div>
          </div>
          <div className="col-span-5 px-2">
            <h1 className="text-xl">Contact Us</h1>
            <span className="text-xs text-gray-200">
              Email us (For Data Science Queries): admissions@accredian.com
            </span>
            <span className="text-xs text-gray-200">
              Email us (For Product Management Queries):pm@accredian.com
            </span>
            <span className="text-xs text-gray-200">
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </span>
            <span className="text-xs text-gray-200">
              Product Management Admission Helpline:+91 9625811095
            </span>
            <span className="text-xs text-gray-200">
              Enrolled Student Helpline: +91 7969322507
            </span>
            <span className="text-xs text-gray-200">
              Email us (For Data Science Queries): admissions@accredian.com
            </span>
            <span className="text-xs text-gray-200">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </span>
            <h1 className="text-xl mt-5">Why Accredian</h1>
            <h1 className="text-xl font-light">Follow Us</h1>

            <div className="flex items-center justify-start gap-3 mt-2">
              <Image src={link1} width={40} height={40} alt="link1" />
              <Image src={link2} width={30} height={30} alt="link1" />
              <Image src={link3} width={30} height={30} alt="link1" />
              <Image src={link4} width={30} height={30} alt="link1" />
              <Image src={link5} width={21} height={21} alt="link1" />
            </div>
          </div>
          <div className="col-span-4 px-2">
            <h1 className="text-xl">Accredian</h1>
            <span className="text-sm text-gray-200">About</span> <br />
            <span className="text-sm text-gray-200">Career</span> <br />
            <span className="text-sm text-gray-200">Blog</span> <br />
            <span className="text-sm text-gray-200">Admission Policy</span>{" "}
            <br />
            <span className="text-sm text-gray-200">Referral Policy</span>{" "}
            <br />
            <span className="text-sm text-gray-200">Privacy Policy</span> <br />
            <span className="text-sm text-gray-200">Terms Of Service</span>{" "}
            <br />
            <span className="text-sm text-gray-200">Master FAQs</span>
          </div>
        </div>
        <span className="text-xs text-gray-200 mt-10 flex items-center justify-center">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </span>
      </div>
    </div>
  );
};

export default FooterComponent;
