import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const NavbarConsts = [
  {
    id: 1,
    title: "Home",
    to: "home",
  },
  {
    id: 2,
    title: "About",
    to: "about",
  },
  {
    id: 3,
    title: "Skills",
    to: "skills",
  },
  {
    id: 4,
    title: "Work",
    to: "work",
  },
  {
    id: 5,
    title: "Contact",
    to: "contact",
  },
];

export const SocialIconsConsts = [
  {
    id: 1,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/giorgi-ilariani-69869a260/",
    icon: <FaLinkedin size={30} />,
    bgColor: "rgb(37 99 235)",
  },
  {
    id: 2,
    title: "Github",
    href: "https://github.com/GiorgiIlariani",
    icon: <FaGithub size={30} />,
    bgColor: "#333333",
  },
  {
    id: 3,
    title: "Resume",
    href: "https://drive.google.com/file/d/1CasEVkq1Xn1AXKTj852oGg9KgFG7fAQq/view?usp=sharing",
    icon: <BsFillPersonLinesFill size={30} />,
    bgColor: "#565f69",
  },
];
