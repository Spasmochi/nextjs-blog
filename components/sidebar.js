import { useState } from "react";
import Transition from "../hooks/transition";
import Link from "next/link";

function Sidebar(props) {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  return (
    <div>
      <div className="h-screen flex overflow-hidden bg-white">
        {/* <!-- Off-canvas menu for mobile --> */}
        <Transition show={sidebarOpen}>
          <div className="md:hidden">
            <div className="fixed inset-0 flex z-40">
              {/* <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.
        
     
      --> */}
              <Transition
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0">
                  <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
              </Transition>
              {/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.
      --> */}
              <Transition
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                  <div className="absolute top-0 right-0 -mr-14 p-1">
                    <button
                      className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                      aria-label="Close sidebar"
                      onClick={() => setsidebarOpen(!sidebarOpen)}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/workflow-logo-on-white.svg"
                        alt="Workflow"
                      />
                    </div>
                    <nav className="mt-5 px-2">
                      <Link href="/">
                        <a
                          className={
                            "group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                            (props.title === "Dashboard"
                              ? " bg-gray-200 hover:bg-gray-200"
                              : "")
                          }
                        >
                          <svg
                            className={
                              "mr-4 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                              (props.title === "Dashboard"
                                ? " text-gray-600 group-hover:text-gray-600"
                                : " text-gray-400")
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                          Dashboard
                        </a>
                      </Link>
                      <Link href="/contacts">
                        <a
                          className={
                            "mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150" +
                            (props.title === "Contacts"
                              ? " bg-gray-200 hover:bg-gray-200"
                              : "")
                          }
                        >
                          <svg
                            className={
                              "mr-4 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                              (props.title === "Contacts"
                                ? " text-gray-600 group-hover:text-gray-600"
                                : " text-gray-400")
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          Contacts
                        </a>
                      </Link>
                      <Link href="/projects">
                        <a
                          className={
                            "group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                            (props.title === "Projects"
                              ? " bg-gray-200 hover:bg-gray-200"
                              : "")
                          }
                        >
                          <svg
                            className={
                              "mr-4 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                              (props.title === "Projects"
                                ? " text-gray-600 group-hover:text-gray-600"
                                : " text-gray-400")
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                          </svg>
                          Projects
                        </a>
                      </Link>

                      <Link href="/prose">
                        <a
                          className={
                            "group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                            (props.title === "Prose"
                              ? " bg-gray-200 hover:bg-gray-200"
                              : "")
                          }
                        >
                          <svg
                            className={
                              "mr-4 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                              (props.title === "Prose"
                                ? " text-gray-600 group-hover:text-gray-600"
                                : " text-gray-400")
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                          Prose
                        </a>
                      </Link>
                    </nav>
                  </div>
                  <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    <a
                      href="#"
                      className="flex-shrink-0 group block focus:outline-none"
                    >
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="/Spasmochi.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
                            Spasmochi
                          </p>
                          <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                            View profile
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </Transition>
              <div className="flex-shrink-0 w-14">
                {/* <!-- Force sidebar to shrink to fit close icon --> */}
              </div>
            </div>
          </div>
        </Transition>
        {/* <!-- Static sidebar for desktop --> */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
            <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="h-8 w-auto"
                    src="/workflow-logo-on-white.svg"
                    alt="Workflow"
                  />
                </div>
                <nav className="mt-5 flex-1 px-2 bg-white">
                  <Link href="/">
                    <a
                      className={
                        "group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                        (props.title === "Dashboard"
                          ? " bg-gray-200 hover:bg-gray-200"
                          : "")
                      }
                    >
                      <svg
                        className={
                          "mr-3 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                          (props.title === "Dashboard"
                            ? " text-gray-600 group-hover:text-gray-600"
                            : " text-gray-400")
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </Link>
                  <Link href="/contacts">
                    <a
                      className={
                        "group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                        (props.title === "Contacts"
                          ? " bg-gray-200 hover:bg-gray-200"
                          : "")
                      }
                    >
                      <svg
                        className={
                          "mr-3 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                          (props.title === "Contacts"
                            ? " text-gray-600 group-hover:text-gray-600"
                            : " text-gray-400")
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Contacts
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a
                      className={
                        "group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                        (props.title === "Projects"
                          ? " bg-gray-200 hover:bg-gray-200"
                          : "")
                      }
                    >
                      <svg
                        className={
                          "mr-3 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                          (props.title === "Projects"
                            ? " text-gray-600 group-hover:text-gray-600"
                            : " text-gray-400")
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Projects
                    </a>
                  </Link>

                  <Link href="/prose">
                    <a
                      className={
                        "group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" +
                        (props.title === "Prose"
                          ? " bg-gray-200 hover:bg-gray-200"
                          : "")
                      }
                    >
                      <svg
                        className={
                          "mr-3 h-6 w-6 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" +
                          (props.title === "Prose"
                            ? " text-gray-600 group-hover:text-gray-600"
                            : " text-gray-400")
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      Prose
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-9 w-9 rounded-full"
                        src="/Spasmochi.png"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">
                        Spasmochi
                      </p>
                      <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 transition ease-in-out duration-150">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              aria-label="Open sidebar"
              onClick={() => setsidebarOpen(!sidebarOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex="0"
          >
            <div className="pt-2 pb-6 md:py-4">
              <div className="max-w-7xl mb-4 px-4 sm:px-6 md:px-6">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {props.title}
                </h1>
              </div>
              <div className="align-middle inline-block min-w-full">
                {props.content}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
