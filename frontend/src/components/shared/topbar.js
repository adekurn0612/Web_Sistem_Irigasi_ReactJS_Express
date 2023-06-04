import {Bars3CenterLeftIcon} from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
      className={`bg-purple-900 fixed w-full h-16 flex justify-between px-0 items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="px-3 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
          <Link to='/'>
              <button
                className="flex bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Landing Page
              </button>
            </Link>
          </div>
        </Menu>
      </div>
    </div>
  );
}
