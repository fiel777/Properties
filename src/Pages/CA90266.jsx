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
                528 15th St, Manhattan Beach, CA 90266
              </h1>
              <p className="text-sm font-light font-primary">
                Hey everyone, check out this super cool Custom-Built Coastal
                Luxury Home! It's got a mix of modern farmhouse and South
                Hampton vibes and is packed with 6 bedrooms and 7 bathrooms. But
                the real showstopper is the kitchen – two huge islands, a custom
                tile backsplash, and fancy Italian marble countertops!
              </p>
              <p className="text-sm font-light font-primary">
                Treat yourself to a look inside this Custom-Built Coastal Luxury
                Home with modern farmhouse and South Hampton influences. The
                Craftsmanship in this 6-bedroom 7-bath home is remarkable
                starting with the impressive kitchen, appointed with 2 expansive
                center islands, custom ceramic tile back-splash and stunning
                counter-tops of Statuario marble from Italy.
              </p>
              <p className="text-sm font-light font-primary">
                In a nutshell, this house is all about living the dream. From
                the awesome kitchen to every part of the house, it's perfect for
                making great memories. Don't miss out on this chance to call it
                your own. Get ready for some seriously cool living in this
                coastal paradise!
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
