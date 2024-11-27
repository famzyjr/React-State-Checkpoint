import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../imgs/logo.png';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev); // Toggle the menu visibility
  };

  // Close the navbar menu when a link is clicked (on mobile)
  const handleLinkClick = () => {
    setClicked(false); // Close the menu when any link is clicked
  };

  return (
    <div className="bg-black p-5 nav">
      <img className="max-w-[200px] relative top-5" src={logo} alt="Logo" />
      
      {/* Navigation Menu */}
      <ul
        id="navbar"
        className={`${
          clicked ? "flex flex-col" : "hidden"
        } gap-10 justify-center items-center pb-10 text-white md:flex md:flex-row md:gap-10 absolute md:static top-10 left-[270x] right-0   bg-black md:bg-transparent`}
      >
        <li>
          <NavLink to="/" onClick={handleLinkClick}>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/kaftan" onClick={handleLinkClick}>KAFTAN</NavLink>
        </li>
        <li>
          <NavLink to="/agbada" onClick={handleLinkClick}>AGBADA</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>CONTACT</NavLink>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div 
        className="flex justify-end absolute top-5 right-5 cursor-pointer md:hidden" 
        onClick={handleClick}
      >
        {clicked ? (
          <IoClose id="icon" className="text-white text-2xl" />
        ) : (
          <FaBars id="icon" className="text-white text-2xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
