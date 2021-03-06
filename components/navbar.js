import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-amber-400">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-36 h-10">
                    <Link href="/">
                      <a>
                        <Image src="/logo.png" alt="logo" layout="fill" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="ml-8 flex items-baseline space-x-4">
                  <Link href="/team">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      Teams
                    </a>
                  </Link>
                  <Link href="/society">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      Society
                    </a>
                  </Link>
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
                  <Link href="/#about">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      About Us
                    </a>
                  </Link>
                  <Link href="/#sponsors">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      Sponsors
                    </a>
                  </Link>
                  <Link href="/#contact">
                    <a className="text-slate-900 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                      Contact
                    </a>
                  </Link>
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
                <Link href="/team">
                  <a className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold">
                    Team
                  </a>
                </Link>

                <Link href="/society">
                  <a className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold">
                    Society
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold"
                >
                  Alumni
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold"
                >
                  Faculty Advisory Board
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold"
                >
                  Gallery
                </a>

                <Link href="/sponsors">
                  <a className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold">
                    Sponsorss
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-slate-900 hover:bg-orange-800 hover:text-white block px-3 py-2 rounded-md text-sm font-bold"
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
