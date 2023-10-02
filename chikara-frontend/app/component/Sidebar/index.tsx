import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaHome, FaUser, FaBars, FaTimes, FaBus, FaCloud } from 'react-icons/fa';
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("/homePage");
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const closeSidebar = () => {
    if (isMobile && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
  };
    
    const handleLinkClick = (link: string) => {
      setActiveLink(link);
    };
    
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(); 
    const handleResizeWrapper = () => {
      handleResize();
    };
    document.addEventListener('resize', handleResizeWrapper);
    return () => {
      document.removeEventListener('resize', handleResizeWrapper);
    };
  }, []); 


  return (
    <div className={`flex h-screen ${isMobile ? 'md:h-auto' : ''}`} style={{ backgroundColor: '#098081' }}>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-0 bg-teal-400 text- rounded-full p-2"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (
            <FaBars className="h-6 w-6 text-green-900 ml-3 transition-all duration-300" />
          ) : (
            <FaTimes className="h-6 w-6 text- transition-all duration-300" />
          )}
        </button>
      )}
      <div
        className={`w-1/9 bg-cyan-800 text- flex flex-col md:flex-col ${isMobile && isSidebarCollapsed ? 'md:flex-col md:w-20' : ''
          }`}
      >
        <div className="p-4  flex items-center bg-white">
          <div className="relative ">
            <img
              src='./assets/Group 2364.png'
              alt="Logo"
              className={`logo object-contain h-20 ${isSidebarCollapsed ? 'md:w-20 md:h-20 ' : ''
                }`}
            />
          </div>
        </div>
        <ul className={`p-2 mt-14 ${isSidebarCollapsed ? 'hidden' : ''}`}>
          <Link href="/creditChart">
            <li
              onClick={() => handleLinkClick("/creditChart")}
              className={`flex mt-6 py-4 ml-10 cursor-pointer items-center ${activeLink === "/creditChart"
                  ? 'bg-white text-teal-800 rounded-lg px-3'
                  : 'text-white hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300'
                }`}
            >
               <FaCreditCard
          className={`mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''} ${
            activeLink === "/creditChart" ? 'text-teal-800  ' : 'text-white '
          }`} />
              <span className="list capitalize text-xl ml-2">Credits</span>
            </li>

          </Link>
          <Link href="/emissionChart">
            <li
              onClick={() => handleLinkClick('/emissionChart')}
              className={`flex mt-6 py-4 ml-10 cursor-pointer items-center ${activeLink === '/emissionChart'
                  ? 'bg-white text-teal-800 rounded-lg px-3'
                  : 'text-white hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300'
                }`}
            >
              <FaCloud  className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}  ${
            activeLink === "/emissionChart" ? 'text-teal-800  ' : 'text-white '
          }`} />
              <span className="list capitalize text-xl ml-2">Emissions</span>
            </li>

          </Link>


          <Link href="/vehicles">
            <li
              onClick={() => handleLinkClick('/vehicles')}
              className={`flex mt-6 py-4 ml-10 cursor-pointer items-center ${activeLink === '/vehicles'
                  ? 'bg-white text-teal-800 rounded-lg px-3'
                  : 'text-white hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300'
                }`}
            >
              <FaBus  className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}  ${
            activeLink === "/vehicles" ? 'text-teal-800  ' : 'text-white '
          }`} />
              <span className="list capitalize text-xl ml-2">Vehicles</span>
            </li>

          </Link>

          <Link href="/profile">
            <li
              onClick={() => handleLinkClick('/profile')}
              className={`flex mt-6 py-4 ml-10 cursor-pointer items-center ${activeLink === '/profile'
                  ? 'bg-white text-teal-800 rounded-lg px-3'
                  : 'text-white hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300'
                }`}
            >
              <FaUser  className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''} 
              ${activeLink === "/profile" ? 'text-teal-800  ' : 'text-white '}`} />
              <span className="list capitalize text-xl ml-2">Profile</span>
            </li>

          </Link>

        </ul>
        <div className="flex-grow"></div>
        <div className="p-4"></div>
        <footer className="ml-12 mb-6 text-sm text-white">@2023 Ecobasi, <br /> All rights reserved</footer>
      </div>
      <div className={`flex-grow bg-white ${isMobile && isSidebarCollapsed ? 'md:w-60' : ''}`} onClick={closeSidebar}></div>
    </div>
  );
};
export default Sidebar;