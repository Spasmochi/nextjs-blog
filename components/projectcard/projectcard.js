import Transition from "../../hooks/transition";
import { useState, useEffect, useRef } from "react";
import MemberImg from "../projectcard/memberimg";

function projectcards(props) {
  const node = useRef();
  const [subOpen, setsubOpen] = useState(false);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setsubOpen(false);
  };
  useEffect(() => {
    if (subOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subOpen]);
  return (
    <tr>
      <td className="px-6 py-3 max-w-0 w-full whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className={
              "flex-shrink-0 w-2.5 h-2.5 rounded-full " + props.projectColor
            }
          ></div>
          <a href="#" className="truncate hover:text-gray-600">
            <span>
              {props.projectName}
              <span className="text-gray-500 font-normal">
                {" "}
                in {props.sectionRef}
              </span>{" "}
            </span>
          </a>
        </div>
      </td>
      <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
        <div className="flex items-center space-x-2">
          <div className="flex flex-shrink-0 -space-x-1">
            <MemberImg img={props.img1} extraMembers={props.extraMembers} />
            <MemberImg img={props.img2} extraMembers={props.extraMembers} />
            <MemberImg img={props.img3} extraMembers={props.extraMembers} />
            <MemberImg img={props.img4} extraMembers={props.extraMembers} />
          </div>

          <span className="flex-shrink-0 text-xs leading-5 font-medium">
            {props.extraMembers}
          </span>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
        {props.date}
      </td>
      <td className="pr-6">
        <div className="relative flex justify-end items-center">
          <button
            id="project-options-menu-0"
            aria-has-popup="true"
            type="button"
            className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
            onClick={() => setsubOpen(!subOpen)}
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          <Transition
            show={subOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              ref={node}
              className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg"
            >
              <div
                className="z-10 rounded-md bg-white shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="project-options-menu-0"
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Edit
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                    </svg>
                    Duplicate
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                    Share
                  </a>
                </div>
                <div className="border-t border-gray-100"></div>
                <div className="py-1">
                  <a
                    href="#"
                    className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </td>
    </tr>
  );
}

export default projectcards;
