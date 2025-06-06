import React, { useState, useEffect, useRef } from "react";

function Header() {
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
      className={`bg-gray-800 fixed top-0 left-0 right-0 transition-transform duration-700 z-50 h-14 text-white ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container text-xl font-bold">
        MySiteName
      </div>
    </header>
  );
}

export default Header;
