/* eslint-disable react/jsx-key */
import { useState } from "react";
import { content } from "../src/data/Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <><div className="fixed top-30 left-10 z-50 cursor-pointer ">
          <div
              className="sm:cursor-pointer fixed top-30 left-10 z-[999] rounded-lg bg-white/40 p-2"
              onClick={toggleMenu}
          >
              <HiMenuAlt2 size={34} />
          </div></div><div className="w-full flex justify-center ">
          {showMenu && (
              <nav
                  className="fixed top-90 inset-x-0 flex justify-center"
              >
                  {nav.map((item, i) => (
                      <a
                          href={item.link}
                          onClick={() => setActive(i)}
                          className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-blue-100 text-white"} `}
                      >
                          {createElement(item.icon)}
                      </a>
                  ))}
              </nav>)}
          </div></>
  );
};

export default Navbar;