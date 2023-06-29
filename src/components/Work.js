import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/project_1.png";
import img2 from "../assets/project_2.png";
import img3 from "../assets/project_4.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatibus consectetur at similique numquam quisquam enim
                temporibus voluptates, doloremque .
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span>Shippo Football Academy</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <div className="flex gap-x-8">
                  <a
                    href="https://shippo-football-academy.web.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                     
                      Live Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/football-academy-client"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/football-academy-server"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Backend code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-20"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span>Toy Marketplace</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <div className="flex gap-x-8">
                  <a
                    href="https://toy-marketplace-8d776.web.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">Live Demo</button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/assingment_11"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/toy-marketplace-server"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Backend code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-50 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[310px]"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <div className="flex gap-x-8">
                  <a
                    href="https://chef-recipe-hunter-22ef1.web.app/"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">Live Demo</button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/assingment_10"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Front-end code
                    </button>
                  </a>
                  <a
                    href="https://github.com/mdalamin0/Chef-Recipe-hunter-serve"
                    target="_blank"
                  >
                    <button className="btn text-sm px-3 py-2">
                      Backend code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
