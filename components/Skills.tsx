import Image from "next/image";
import { data } from "../data/skills";

const Skills = () => {
  const skills = data;
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

        <div className="w-full grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8">
          {skills.map(({ id, img, skill }) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              key={id}>
              <Image
                className="mx-auto my-4"
                src={img}
                alt="html"
                width={80}
                height={80}
              />
              <p className="mb-4">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
