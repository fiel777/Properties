import { React, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";

function PropertyModal({ closeModal, data }) {

  const boxRef = useRef(null);

  useEffect(() => {
    window.onclick = (event) => {
      if (
        event.target.contains(boxRef.current) &&
        event.target !== boxRef.current
      )
       {
        closeModal(false);
      }
    };
  }, []);



  return (
    <div className="inset-0 fixed text-black z-50 text-sm flex flex-col items-center justify-center ">
      <div
        className=" bg-white/90  shadow-lg rounded-md absolute h-full w-full lg:h-full lg:w-full  flex items-center justify-center "
        ref={boxRef}
      >
        <div className="relative lg:h-3/4 lg:w-1/2 ">
          <div className="bg-slate-700 p-4 relative ">
            <TfiClose
              size={20}
              className="rounded-sm top-2 absolute right-2 text-white font-bold z-50 hover:scale-125 transition duration-300 cursor-pointer  "
              onClick={() => closeModal()}
            />
          </div>
          <img
            src={data.imgUrl}
            alt=""
            className="object-fill h-full w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;
