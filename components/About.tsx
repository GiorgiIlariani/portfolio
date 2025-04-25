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
      className="w-full h-screen xs:h-auto bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1080px] mx-auto px-5 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <div className="text-[#64ffda] text-4xl mr-5">About me</div>
          <div className="border border-[#233554] w-[350px] sm:hidden block"></div>
        </div>

        <div className="flex xl:flex-col justify-between items-center flex-row">
          <div className="max-w-[550px] mt-4">
            <p className="text-[#8892b0] text-[20px] mt-4">
              Hey, I’m Giorgi — a web developer with almost four years of
              experience building fast and responsive web applications. I got
              started with Bitcamp, where I learned the fundamentals of HTML,
              CSS, and JavaScript, and quickly found a passion for creating
              user-friendly websites.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              After a few months, I began learning React and later moved into
              working with Next.js, which has become my main framework. I use
              TypeScript to write safe and scalable code and rely on UI
              libraries like Tailwind CSS, Material UI, and Shadcn to speed up
              development and keep designs clean.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              I’ve worked on real client projects, often collaborating with
              backend developers to build full-stack applications. One of my
              biggest projects was a complete e-commerce website built with
              Next.js, which helped sharpen my frontend and backend skills.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              I also completed technical assignments for Redberry Agency,
              reaching the interview stage, and recently delivered three paid
              projects in just a few months. I'm always pushing myself to learn
              new tools and build better digital experiences. My goal is to keep
              growing and contribute to projects that make an impact.
            </p>
          </div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative my-8 xs:hidden block"
            ref={ref}
          >
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

//

//

//

//
