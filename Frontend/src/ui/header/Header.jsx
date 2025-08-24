import React from "react";
import { useDarkMode } from "../../Hook/UseDarkMood";
import { MdOutlineDarkMode } from "react-icons/md";
import { PiCloudSunBold } from "react-icons/pi";

const Header = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="flex items-center justify-between px-18 h-[60px] border-b border-Border">
      <div className="logo">Logo</div>
      <ul className="flex  items-center gap-7 ">
        <li>Dark</li>
        <li>Dark</li>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <MdOutlineDarkMode className="text-xl" />
          ) : (
            <PiCloudSunBold className="text-xl" />
          )}
        </button>
      </ul>
    </div>
  );
};

export default Header;
