import React from "react";
import logo from "../assert/logo.png.png";
import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={"/"}>
              <Image src={logo} width={100} height={100} alt="logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link href={"/referred-list"}>
                    <span className="text-gray-800 transition hover:text-gray-500/75">
                      {" "}
                      Referred List{" "}
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Refer & Earn{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Resources{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-800 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-800"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Try for free
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
