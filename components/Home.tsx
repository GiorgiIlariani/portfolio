"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen xs:py-[100px] bg-[#0a192f] pt-0 xs:pt-20">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1080px] mx-auto flex flex-col justify-center h-full space-y-2 px-5">
        <p className="text-[#64ffda] text-5xl py-4">Hi, I am</p>
        <h1 className="sm:text-[40px] text-6xl font-bold text-[#ccd6f6]">
          <TypeAnimation
            sequence={["Giorgi Ilariani", 1000, "Frontend web developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px] mt-2 text-xl">
          <TypeAnimation
            sequence={[
              "A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.",
              1000,
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group px-9 py-[15px] mt-6 flex items-center bg-transparent border border-[#64ffda] text-[#64ffda] rounded tracking-wider">
              Check out my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
