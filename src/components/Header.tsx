import { useState, useEffect } from "react";
import navItems from "../utils/navbar.json";
import textStyles from '../styles/Text.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`sticky top-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <nav className="bg-white w-auto border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleSidebar}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
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
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-1 flex flex-col items-center sm:items-start justify-center">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black font-great-vibes text-center my-5">
                  Minh và Thảo Anh <i className="fa fa-heart fa-1x text-red-400"></i>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex gap-10">
                  {navItems.map((item, index) => (
                    <a key={index} href={item.href} className={`${textStyles.sub2} rounded-md hover:text-[#f98d8a]`}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="sm:hidden">
          <div
            className={`fixed top-0 left-0 h-full w-60 bg-white z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`}
          >
            <button
              onClick={toggleSidebar}
              className="absolute top-5 right-5 text-2xl font-bold"
            >
              ✕
            </button>
            <ul className="flex flex-col h-full gap-5 p-5 border-r border-gray-300">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={`${textStyles.sub2} rounded-md hover:text-[#f98d8a]`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
