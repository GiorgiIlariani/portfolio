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
    additionalClasses: "bg-blue-600",
  },
  {
    id: 2,
    title: "Github",
    href: "https://github.com/GiorgiIlariani",
    icon: <FaGithub size={30} />,
    additionalClasses: "bg-[#333333]",
  },
  {
    id: 3,
    title: "Email",
    href: "https://www.linkedin.com/in/giorgi-ilariani-69869a260/",
    icon: <HiOutlineMail size={30} />,
    additionalClasses: "bg-[#6fc2b0]",
  },
  {
    id: 4,
    title: "Resume",
    href: "https://drive.google.com/file/d/1QR2Kk5En1eLv0LUy6bldNCGH_xXGRRGI/view?usp=drive_link",
    icon: <BsFillPersonLinesFill size={30} />,
    additionalClasses: "bg-[#565f69]",
  },
];
