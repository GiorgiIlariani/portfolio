import { data } from "@/data/work";

const Work = () => {
  // projects file
  const project = data;

  return (
    <section id="work" className="w-full h-auto text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1080px] mx-auto px-5 pt-[200px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div className="flex items-center">
            <div className="text-[#64ffda] text-4xl mr-5">work</div>
            <div className="border border-[#233554] w-[350px] sm:hidden block"></div>
          </div>
          <p className="py-6 text-xl">// Check out some of my recent work</p>
          <p className="text-xl max-w-[700px]">
            from below to top, you will see how I got better on every project.
            Here you will find projects which is not responsive yet, but i am
            working on that.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
          {project.map((item) => {
            return (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image.src})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl md:text-xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
