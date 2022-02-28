import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-amber-400">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="./">
                  <img className="h-12" src="./logo.png" alt="Mars-Ex" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-8 flex items-baseline space-x-1">
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Society
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Alumni
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Faculty Advisor
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Faculty Advisor
                  </a>
                  <a
                    href="#"
                    className="text-slate-900 hover:bg-zinc-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Faculty Advisor
                  </a>
                </div>
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Society
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Alumni
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Faculty Advisor
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Faculty Advisor
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-zinc-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Faculty Advisor
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
