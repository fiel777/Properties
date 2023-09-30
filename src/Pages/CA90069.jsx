import React, { useState, useEffect } from "react";
import CA from "/CA90069/CA900069.webp";
import { BsArrowRight } from "react-icons/bs";
import PropertyModal from "./PropertyModal";
import { Link } from "react-router-dom";

const data = [
  {
    imgUrl: "/CA90069/CA90069_1.webp",
  },

  {
    imgUrl: "/CA90069/CA90069_2.webp",
  },
  {
    imgUrl: "/CA90069/CA90069_3.webp",
  },
  {
    imgUrl: "/CA90069/CA90069_4.webp",
  },
];

function CA90069() {
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
                1615 N Blue Jay Way, Los Angeles, CA 90069
              </h1>
              <p className="text-sm font-light font-primary">
                Welcome to 1615 Blue Jay, a property that redefines luxury
                living in the heart of the Hollywood Hills. This exceptional
                estate, nestled amidst the prestigious Bird Streets, offers a
                rare blend of proximity to Los Angeles' finest attractions while
                providing a serene escape from the hustle and bustle. With
                breathtaking views that will leave you in awe and an
                irresistible price tag, this three-story, solid concrete
                masterpiece firmly anchored into granite stands as a true gem on
                Blue Jay Way.
              </p>
              <p className="text-sm font-light font-primary">
                This is 1615 Blue Jay. The most stunning estate in all the Bird
                Streets with proximity to the best LA has to offer but truly
                away from it all. With views to impress and priced to sell, this
                3-story, all-concrete structure is anchored into granite and
                situated on esteemed Blue Jay Way in the Hollywood Hills.
              </p>
              <p className="text-sm font-light font-primary">
                In the world of real estate, 1615 Blue Jay is a standout,
                offering not just a home but an unparalleled lifestyle. The
                remarkable views, the solid concrete structure, and the
                exclusive location on Blue Jay Way combine to create an
                opportunity that's as rare as it is enticing. Whether you seek
                tranquility or the vibrant energy of LA's best, this property
                offers the best of both worlds. Make your move and seize the
                chance to own a piece of Hollywood Hills paradise at 1615 Blue
                Jay.
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

export default CA90069;
