"use client";

import Image from "next/image";
import PersonalImage from "@/public/assets/images/me.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="w-full h-screen xs:h-auto bg-[#0a192f] text-gray-300">
      <div className="max-w-[1080px] mx-auto px-5 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <div className="text-[#64ffda] text-4xl mr-5">About me</div>
          <div className="border border-[#233554] w-[350px] sm:hidden block"></div>
        </div>

        <div className="flex xl:flex-col justify-between items-center flex-row">
          <div className="max-w-[550px] mt-4">
            <p className="text-[#8892b0] text-[20px] mt-4">
              Hello! I'm Giorgi, and I love making things as a Web Developer. I
              started getting into web development two years ago, and it's been
              a great learning journey. It all began with Bitcamp, a group for
              web developers. I started learning the basics of HTML, CSS, and
              JavaScript. Gradually, I found out how much I enjoyed creating
              websites and became a frontend developer.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              The first three to four months were tough, but I kept thinking
              about the success I could achieve in this field. After five
              months, I started learning React and loved working with it. A year
              later, I discovered Next.js, a popular React library with some
              cool features. I also found out that writing code with TypeScript
              is a smart move because it keeps things safe. I learned some
              styling libraries like Tailwind, MUI, and Shadcn, which helped me
              save time when building applications.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              Right now, my main focus is on learning new things. For me,
              learning new stuff is like taking a step towards success.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4"></p>
          </div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative my-8 xs:hidden block"
            ref={ref}>
            <div className="rounded w-[350px] h-[350px] border-[3px] border-[#64ffda] absolute left-6 top-6 cursor-pointer" />
            <Image
              src={PersonalImage}
              alt="my photo"
              className="rounded w-[350px] object-contain z-10 relative"
              width={350}
              height={350}
            />
            <div className="absolute bg-[#64ffda] w-full h-full z-10 top-0 opacity-50 hover:opacity-0 duration-200" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
