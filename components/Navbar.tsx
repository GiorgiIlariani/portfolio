"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { NavbarConsts, SocialIconsConsts } from "@/constants";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

  const handleClick = () => {
    setHamburgerMenu((prev: boolean) => !prev);
  };

  const handleScrollBottom = () => {
    // scrollToBottom();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScrollTop = () => {
    // scrollToBottom();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 z-20">
      <div
        className="w-[40px] text-[#64ffda] cursor-pointer"
        onClick={handleScrollTop}>
        <Logo />
      </div>
      {/* desktop menu */}
      <ul className="flex md:hidden">
        {NavbarConsts.map((item) => (
          <li
            key={item.id}
            className="text-[22px] list-none px-4 cursor-pointer">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-[#64ffda] transition duration-150">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:flex hidden z-20">
        {!hamburgerMenu ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !hamburgerMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-start pt-20 items-center hidden md:flex"
        }>
        {NavbarConsts.map((item) => (
          <li
            className="py-6 text-4xl list-none px-4 cursor-pointer"
            key={item.id}>
            <Link
              to={item.to}
              onClick={handleClick}
              smooth={true}
              duration={500}>
              {item.title}
            </Link>
          </li>
        ))}
        <div className="flex gap-4 relative top-10">
          {SocialIconsConsts.map((item) => {
            return (
              <li
                key={item.id}
                style={{ backgroundColor: item.bgColor }}
                className="w-[60px] h-[60px] flex justify-between items-center list-none px-4 cursor-pointer text-xl"
                onClick={
                  item.title === "Email" ? handleScrollBottom : undefined
                }>
                <a
                  href={item?.href !== "" ? item?.href : "#"}
                  className="flex justify-between items-center w-full text-gray-300"
                  target="_blank">
                  {item.icon}
                </a>
              </li>
            );
          })}
        </div>
      </ul>

      {/* Social icons */}
      <div className="xl:hidden flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          {SocialIconsConsts.map((item) => {
            return (
              <li
                key={item.id}
                style={{ backgroundColor: item.bgColor }}
                className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 list-none px-4 cursor-pointer text-xl"
                onClick={
                  item.title === "Email" ? handleScrollBottom : undefined
                }>
                <a
                  href={item?.href !== "" ? item?.href : "#"}
                  className="flex justify-between items-center w-full text-gray-300"
                  target="_blank">
                  {item.title} {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
