import React, { useState, useEffect } from "react";
import CA from "/CA90266/CA90266.webp";
import { BsArrowRight } from "react-icons/bs";
import PropertyModal from "./PropertyModal";
import { Link } from "react-router-dom";


const data = [
  {
    imgUrl: "/CA90266/CA90266_1.webp",
  },

  {
    imgUrl: "/CA90266/CA90266_2.webp",
  },
  {
    imgUrl: "/CA90266/CA90266_3.webp",
  },
  {
    imgUrl: "/CA90266/CA90266_4.webp",
  },
];

function CA90266() {
  const [element, setElement] = useState();
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [open]);

  return (
    <div className=" w-11/12  m-auto flex items-center justify-center py-20 2xl:max-w-[2000px] lg:py-40">
      <div className="w-full">
        <div className="flex flex-col gap-4  lg:flex-row">
          <div className="flex-1">
            <div className="overflow-hidden">
              <img
                src={CA}
                alt="image"
                className="h-full w-full md:h-[375px] lg:h-[400px] hover:scale-105 cursor-pointer transition delay-75 duration-300 object-cover "
              />
            </div>
            <div className="grid grid-cols-2 pt-4 gap-2 lg:grid-cols-2 xl:grid-cols-4 ">
              {data.map((item, i) => (
                <div
                  className="overflow-hidden"
                  onClick={() => setOpen(!open) || setElement(i)}
                  key={i}
                >
                  <img
                    src={item.imgUrl}
                    alt="image"
                    className="w-full h-[150px] md:h-[200px] lg:h-[125px] xl:h-[200px] hover:scale-105 cursor-pointer transition delay-75 duration-300 object-cover "
                    loading="hazy"
                  ></img>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 font-secondary font-medium border p-4 border-slate-100 relative">
            <div className="lg:flex lg:flex-col lg:gap-4">
              <h1 className="lg:pt-20">
                670 Perugia Way, Los Angeles, CA 90077
              </h1>
              <p className="text-sm font-light font-primary">
                Nestled atop the scenic hills of Los Angeles, 670 Perugia Way is
                a singular world-class gated estate that beckons with an aura of
                exclusivity and prestige. This exceptional property, spanning
                over an acre, offers a breathtaking panorama of the lush
                fairways of the renowned Bel Air Country Club.
              </p>
              <p className="text-sm font-light font-primary">
                Singular World Class Gated Estate is balanced on a generous
                acre-plus lot overlooking fairways of the Bel Air Country Club.
                Situated at end of the cul-de-sac on prestigious Perugia Way.
                Built 2015 by London-based architect, Felicity Bell, this
                indescribable residence is nothing short of a masterpiece, it
                could be characterized as a Villa Moderne.
              </p>
              <p className="text-sm font-light font-primary">
                670 Perugia Way is more than just a home; it's an embodiment of
                luxury living in one of Los Angeles' most prestigious
                neighborhoods. With its breathtaking views, gated privacy, and
                world-class amenities, this estate redefines the meaning of
                opulence. It's an invitation to experience the pinnacle of
                California living in a place where every moment is truly
                exceptional.
              </p>
              <div className="flex flex-col py-4 gap-4 lg:flex-row">
                <div className="w-[180px] h-[30px] relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
                  <div
                    onClick={() => window.open("https://timelmes.com/about")}
                    className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white "
                  >
                    <span className="text-xs font-normal  uppercase">
                      TIM ELMES BIO
                    </span>
                    <BsArrowRight size={20} className="animate-pulse " />
                    <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full "></div>
                  </div>
                </div>
                <div className="w-[180px] h-[30px] relative text-black hover:text-white bg-white z-40 cursor-pointer    ">
                  <div
                    onClick={() => window.open("https://nobleblack.com/about")}
                    className="flex items-center justify-center gap-4 border border-black w-full h-full group dark:border-white "
                  >
                    <span className="text-xs font-normal  uppercase">
                      NOBLE BLACK
                    </span>
                    <BsArrowRight size={20} className="animate-pulse " />
                    <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full "></div>
                  </div>
                </div>
              </div>

              <div className="flex  lg:pt-15 justify-start ">
                <Link to="/Agents" target="_a">
                  <span className="text-sm underline font-secondary font-normal pt-2 cursor-pointer transition hover:scale-105 duration-200">
                    Check Agents
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <PropertyModal
          closeModal={handleButtonClick}
          data={data[element]}
        ></PropertyModal>
      )}
    </div>
  );
}

export default CA90266;
