import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaBlog, FaImages } from "react-icons/fa";

import dayjs from "dayjs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm:ss"));
  const [isSticky, setIsSticky] = useState(false);
  // Load the active link from localStorage on initial load
  const [active, setActive] = useState(() => {
    const savedLink = localStorage.getItem("activeLink");
    console.log("Initial active link from storage:", savedLink);
    return savedLink || "Home";
  });
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Save active link to localStorage when it changes
  useEffect(() => {
    console.log("Updating active link in storage:", active);
    localStorage.setItem("activeLink", active);
  }, [active]);
  const links = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/work", label: "Work", icon: <FaBriefcase /> },
    { path: "/blog", label: "Blog", icon: <FaBlog /> },
    { path: "/gallery", label: "Gallery", icon: <FaImages /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full flex z-50 transition-all  duration-300 items-center justify-between px-4 opacity-[30px]   text-white  ${
        isSticky ? " py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Left Side - Logo */}
      <div className="text-sm hidden md:block">Asia/Jakarta</div>

      {/* Center - Links */}
      <div
        className={`${
          isSticky ? "bg-transparent" : "bg-[rgba(0,0,0,0.3)]"
        } md:static md:mx-auto md:flex md:justify-center fixed bottom-8 left-1/2 transform md:transform-none -translate-x-1/2 p-[4px] rounded-[16px] border-[0.1px] border-gray-700  ${"flex items-center space-x-1 md:w-auto w-max"}`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`${
              active === link.label
                ? "bg-[rgba(84,84,84,0.4)] border-[0.4px] border-gray-700"
                : ""
            } flex items-center justify-center space-x-2  px-[14px] py-[6px] md:py-[3px] rounded-[11px] hover:bg-[rgba(48,48,48,0.2)] `}
            onClick={() => setActive(link.label)}
          >
            {link.icon}
            <span className="text-[13px] font-semibold hidden md:inline">
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Right Side - Time */}
      <div className="text-sm hidden md:block">{currentTime}</div>
    </nav>
  );
};

export default Navbar;

// className="fixed md:static  bottom-4  flex items-center space-x-1 inset-0 bg-[rgba(0,0,0,0.3)]  p-[4px]  rounded-[16px] border-[0.1px] border-gray-700"
