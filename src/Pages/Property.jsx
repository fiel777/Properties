import React from "react";

import CA from "/CA_9007/CA9007.webp";
import CA2 from "/CA90266/CA90266.webp";
import CA3 from "/CA90069/CA900069.webp";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FramerContainer, navItem } from "../FramerMotion/DefaultAnimation";
import { Link } from "react-router-dom";


function Property() {
  return (
    <div className="w-11/12 h-screen  m-auto flex items-center flex-col py-20 md:w-full md:px-8 lg:max-w-screen-2xl 2xl:max-w-[1800px]">
      <motion.div variants={FramerContainer} initial="hidden" animate="visible">
        <motion.h1
          variants={navItem}
          className="text-center font-primary uppercase tracking-widest lg:font-medium lg:text-2xl"
        >
          Properties
        </motion.h1>

        <div className="py-10  ">
          <div className="flex flex-col items-center gap-8 md:gap-4 lg:flex-row lg:grid-cols-2 ">
            <motion.div
              className="flex flex-col w-11/12  sm:w-9/12  md:w-10/12 h-full"
              variants={navItem}
            >
              <img
                src={CA}
                alt="image"
                className=" h-full w-full md:h-[375px] lg:h-[400px] "
              />
              <div className="font-secondary">
                <div className="flex flex-col gap-4 p-4 border-2 border-gray-100">
                  <h1 className="font-semibold text-sm">
                    670 Perugia Way, Los Angeles, CA 90077
                  </h1>
                  <p className="text-justify text-sm font-light font-primary">
                    Singular World Class Gated Estate is balanced on a generous
                    acre-plus lot overlooking fairways of the Bel Air Country
                    Club.
                  </p>
                  <div className="w-[180px] h-[30px] relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
                    <Link to="/CA9007" target="_blank">
                      <div className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white ">
                        <span className="text-xs font-normal  uppercase">
                          Read More
                        </span>
                        <BsArrowRight size={20} className="animate-pulse " />
                        <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full "></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col w-11/12  sm:w-9/12  md:w-10/12 h-full"
              variants={navItem}
            >
              <img
                src={CA2}
                alt="image"
                className=" h-full w-full md:h-[375px] lg:h-[400px] "
              />
              <div className="font-secondary">
                <div className="flex flex-col gap-4 p-4 border-2 border-gray-100">
                  <h1 className="font-semibold text-sm">
                    528 15th St, Manhattan Beach, CA 90266
                  </h1>
                  <p className="text-justify text-sm  font-light  font-primary">
                    Treat yourself to a look inside this Custom-Built Coastal
                    Luxury Home with modern farmhouse and South Hampton
                    influences.
                  </p>
                  <div className="w-[180px] h-[30px] relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
                    <Link to="/CA90266" target="_blank">
                      <div className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white ">
                        <span className="text-xs font-normal  uppercase">
                          Read More
                        </span>
                        <BsArrowRight size={20} className="animate-pulse " />
                        <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full "></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col w-11/12  sm:w-9/12  md:w-10/12 h-full"
              variants={navItem}
            >
              <img
                src={CA3}
                alt="image"
                className=" h-full w-full md:h-[375px] lg:h-[400px] "
              />
              <div className="font-secondary">
                <div className="flex flex-col gap-4 p-4 border-2 border-gray-100">
                  <h1 className="font-semibold text-sm">
                    {" "}
                    1615 N Blue Jay Way, Los Angeles, CA 90069
                  </h1>
                  <p className="text-justify text-sm  font-light font-primary">
                    This is 1615 Blue Jay. The most stunning estate in all the
                    Bird Streets with proximity to the best LA has to offer but
                    truly away from it all.{" "}
                  </p>
                  <div className="w-[180px] h-[30px] relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
                    <Link to="/CA90069" target="_blank">
                      <div className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white ">
                        <span className="text-xs font-normal  uppercase">
                          Read More
                        </span>
                        <BsArrowRight size={20} className="animate-pulse " />
                        <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full "></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Property;
