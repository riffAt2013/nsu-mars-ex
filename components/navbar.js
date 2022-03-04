import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-amber-400">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="./">
                  <img className="h-12" src="./logo.png" alt="Mars-Ex" />
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="ml-8 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Teams
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Society
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Alumni
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Faculty Advisory Board
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Sponsors
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-2 text-center sm:px-3"
              >
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Society
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Alumni
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Faculty Advisory Board
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Sponsors
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-md font-bold"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
