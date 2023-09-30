
"use client"
import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaHome, FaUser, FaBars, FaTimes, FaBus, FaCloud } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

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

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex h-screen ${isMobile ? 'md:h-auto' : ''}`} style={{ backgroundColor: '#098081' }}>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-0 bg-teal-400 text-white rounded-full p-2"
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
        className={`w-1/9 bg-cyan-800 text- flex flex-col md:flex-col ${
          isMobile && isSidebarCollapsed ? 'md:flex-col md:w-20' : ''
        }`}
      >
        <div className="p-4  flex items-center bg-white">
          <div className="relative ">
            
          <Image
            src="/assets/Group 2364.png" 
             alt="Logo"
              width={225} 
               height={250} 
                className={`logo object-contain h-20 ${
                 isSidebarCollapsed ? 'md:w-20 md:h-20 ' : ''
                  }`}
                  />
            
          </div>
        </div>
        <ul className={`p-2 mt-14 ${isSidebarCollapsed ? 'hidden' : ''}`}>
          <li
            className={` mt-13 flex py-4 text-white  ml-10 transition-all duration-600 cursor-pointer items-center ${
              activeLink === "/homePage" ? 'bg-white text-teal-800 rounded-lg px-1 mr-4' : 'hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3'
            }`}
            onClick={() => setActiveLink("/homePage")}
          >
            <Link href="/homePage">
              <div
                className={`text-white mr-2 ${
                  isSidebarCollapsed ? 'md:w-20 md:h-20' : ''
                }`}
              >
                <FaHome className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
              </div>
            </Link>

            <span className="capitalize text-xl text-teal-800 ">Overview</span>
          </li>

          <Link href="/limitChart">
          <li className="flex mt-6 py-4 text-white  ml-10 hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300 cursor-pointer items-center ">
            <FaCreditCard className={`text-white   mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Emission</span>
          </li>
          </Link>
          <Link href="/carbonChart">
          <li className="flex mt-6 py-4 text-white  ml-10 hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-9 transition-all duration-300 cursor-pointer items-center">
            <FaCloud className={`text-white mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Credits</span>
          </li>
          </Link>
          <Link href="/">
          <li className="flex mt-6 py-4 text-white  ml-10 hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px-3 transition-all duration-300 cursor-pointer items-center">
            <FaBus className={`text-white  mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Vehicles</span>
          </li>
          </Link>
          <Link href="/">
          <li className="flex mt-6 py-4 text-white  ml-10 hover:bg-white hover:text-teal-800 hover:rounded-lg hover:px- transition-all duration-300 cursor-pointer items-center">
            <FaUser className={`text-white  mr-2 ${isSidebarCollapsed ? 'md:w-20 md:h-20' : ''}`} />
            <span className="list capitalize text-xl ml-2">Profiles</span>
          </li>
          </Link>
          
        </ul>
        
        <div className="flex-grow"></div>
        <div className="p-4"></div>
        <footer className=" ml-12 mb-6 text-sm text-white">@2023 Ecobasi, <br /> All rights reserved</footer>
      </div>
      <div className={`flex-grow bg-white ${isMobile && isSidebarCollapsed ? 'md:w-60' : ''}`} onClick={closeSidebar}></div>
     
    </div>
  );
};

export default Sidebar;


