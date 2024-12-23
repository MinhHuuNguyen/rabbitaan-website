import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Topbar */}
      <div className="bg-white z-50 py-5">
        <div className="container mx-auto">
          <div className="text-center align-middle">
            <a href="#home">
              <h1 className="text-4xl text-black font-semibold my-5 ">Hữu Minh <i className="fa fa-heart fa-1x text-red-400"></i> Thảo Anh</h1>
              <span className="relative text-slate-500 font-semibold text-sm before:content-[''] after:content-[''] before:absolute after:absolute before:w-8 after:w-8 before:h-[1px] after:h-[1px] before:bg-slate-500 after:bg-slate-500 before:-left-10 after:-right-10 before:top-1/2 after:top-1/2">
                Just Married
              </span>

            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-black w-full h-20 border-t border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleSidebar}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex justify-center gap-10">
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">Home</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">Story</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">Wedding</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">Gallery</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">Pages</a>
                  <a href="#" className="rounded-md px-3 py-2 text-lg font-semibold hover:text-[#f98d8a]">RSVP</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="sm:hidden">
          <div
            className={`fixed top-0 left-0 h-full w-60 bg-white text-black z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`}
          >
            <button
              onClick={toggleSidebar}
              className="absolute top-5 right-5 text-2xl font-bold"
            >
              ✕
            </button>
            <ul className="flex flex-col h-full gap-5 p-5 border-r border-gray-300">
              <li>
                <a href="#home" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  Story
                </a>
              </li>
              <li>
                <a href="#wedding" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  Wedding
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#pages" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  Pages
                </a>
              </li>
              <li>
                <a href="#rsvp" className="text-black font-semibold text-base hover:text-[#f98d8a]">
                  RSVP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
