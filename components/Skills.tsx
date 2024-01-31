"use client";

import Image from "next/image";
import { data } from "../data/skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = data;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="skills"
      className="w-full h-auto pt-[150px] bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-5 flex flex-col justify-center w-full h-full">
        <div>
          <div className="flex items-center">
            {/* <div className="text-[#64ffda] text-3xl">03.</div> */}
            <div className="text-[#64ffda] text-4xl mr-5">Skills</div>
            <div className="border border-[#233554] w-[350px] sm:hidden block"></div>
          </div>
          <p className="py-4 text-xl">
            // These are the technologies I've worked with
          </p>
        </div>

        <ul
          className="w-full grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8"
          ref={ref}>
          {skills.map((item, index) => (
            <motion.li
              key={item.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-[160px]">
              <div className="h-full shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-1">
                <Image
                  className="mx-auto my-4"
                  src={item.img}
                  alt="html"
                  width={80}
                  height={80}
                />
                <p className="mb-4">{item.skill}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
