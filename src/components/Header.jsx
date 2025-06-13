import { a, label } from "framer-motion/client";
import {Link} from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function Header() {
  const headerNav = [
    { label: "Home", href: "/"},
    { label: "About Me", href: "/headers/About"},
    { label: "Gallery", href: "headers/gallery"},
    { label: "My Works", href: "headers/MyWorks"},
  ]


  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setShow(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShow(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex bg-gray-800 fixed top-0 left-0 right-0 transition-transform duration-700 z-50 h-14 text-white ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-full text-white">
        <div className="flex justify-start items-center container text-xl font-bold">
          MySiteName
        </div>

        <nav className="flex w-full max-w-lg justify-evenly items-center font-semibold text-[1rem]">
          {headerNav.map(link => (
            <Link key={link.href} to={link.href} className=" text-white hover:text-violet-400">{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
