"use client";

import Logo from "./Logo";
import { NavbarConsts, SocialIconsConsts } from "@/constants";
import { Link } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 z-20">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="w-[40px] text-[#64ffda] cursor-pointer">
        <Logo />
      </Link>
      {/* desktop menu */}
      <ul className="flex md:hidden">
        <NavItems />
      </ul>

      {/* mobile menu */}
      <nav className="hidden md:block">
        <Sheet>
          <SheetTrigger className="align-middle">
            <div className="text-[20px] hidden md:block">
              <GiHamburgerMenu />
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-[#0a192f] border-[#0a192f] text-white">
            <ul className="text-center">
              <NavItems />
            </ul>
            <Separator className="border bg-[#0f1724]" />
            <div className="flex gap-4 relative top-10 w-full items-center justify-center">
              {SocialIconsConsts.map((item) => {
                return (
                  <li
                    key={item.id}
                    style={{ backgroundColor: item.bgColor }}
                    className="w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] flex justify-between items-center list-none px-4 cursor-pointer text-xl">
                    {/* {item.title === "Email" ? (
                      <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="flex justify-between items-center w-full text-gray-300">
                        {item.icon}
                      </Link>
                    ) : ( */}
                    <a
                      href={item?.href !== "" ? item?.href : "#"}
                      className="flex justify-between items-center w-full text-gray-300"
                      target="_blank">
                      {item.icon}
                    </a>
                    {/* )} */}
                  </li>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Social icons */}
      <div className="xl:hidden flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          {SocialIconsConsts.map((item) => {
            return (
              <li
                key={item.id}
                style={{ backgroundColor: item.bgColor }}
                className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 list-none px-4 cursor-pointer text-xl">
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
