import React from "react";

import noble from "/noble.webp";
import elmesbio from "/elmesbio.webp";

function Agents() {
  return (
    <div className=" w-11/12 flex m-auto lg:max-w-screen-xl ">
      <div className="">
        <div className="flex flex-col gap-4 py-20 lg:py-40 sm:flex-row ">
          <div className="flex flex-col gap-6 md:flex-row shadow-sm bg-slate-50 p-4">
            <div className="flex-1 font-secondary  flex flex-col gap-2">
              <div className="w-full relative group flex items-center justify-center ">
                <img
                  src={noble}
                  alt="img"
                  className="rounded-full w-[250px] h-[250px] sm:w-full sm:h-[400px] md:h-[550px] sm:rounded-md"
                ></img>

                <div className="hidden md:flex absolute inset-0 bg-gradient-to-b  from-transparent  to-slate-700 via-transparent/30  group" />
                <div className="group absolute bottom-0 w-full flex flex-col p-5 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-300 lg:group-hover:-translate-y-4">
                  <span className="font-primary hidden md:flex">
                    {" "}
                    Top-Ranked NYC Real Estate Broker
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 border-2 border-gray-100 p-4 font-primary">
              <div className="md:pt-20  font-secondary">
                <h1 className="font-semibold">Noble Black</h1>
                <h1 className="font-normal text-sm md:hidden">
                  Top-Ranked NYC Real Estate Broker
                </h1>
              </div>
              <p className=" pt-4 text-sm text-justify">
                Noble has brought his consummate professionalism to the sale of
                New York’s most spectacular signature properties at consistently
                record-breaking prices. Noble has marketed and sold properties
                from penthouses at 15 Central Park West, Jean Nouvel's 100 11th
                Avenue, One Beacon Court, The Sherry-Netherland, and Hudson
                Yards. Noble and his team are also currently marketing new
                developments at the sleek new high-rise design at 111 Murray and
                the historic Art Deco architecture of the Waldorf Astoria
                Residences.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-20 lg:py-40 sm:flex-row ">
          <div className="flex gap-6 flex-col md:flex-row shadow-sm bg-slate-50 p-4">
            <div className="flex-1 flex-col font-secondary flex  gap-2">
              <div className="w-full relative group flex items-center justify-center ">
                <img
                  src={elmesbio}
                  alt="img"
                  className="rounded-full w-[250px] h-[250px] sm:w-full sm:h-[400px] md:h-[550px] sm:rounded-md"
                ></img>

                <div className="hidden md:flex absolute inset-0 bg-gradient-to-b  from-transparent  to-slate-700 via-transparent/30  group" />
                <div className="group absolute bottom-0 w-full flex flex-col p-5 text-white opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-300 lg:group-hover:-translate-y-4">
                  <span className="font-primary hidden md:flex">
                    Real estate expert in national media, including the Wall
                    Street Journal, CNBC, CBS, Financial Times, and Forbes.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 border-2 border-gray-100 p-4 font-primary">
              <div className="md:pt-20 font-secondary">
                <h1 className="font-semibold">Tim Elmes</h1>
                <h1 className="font-normal text-sm md:hidden">
                  Top-Ranked NYC Real Estate Broker
                </h1>
              </div>
              <p className=" pt-4 text-sm text-justify">
                With over $3 B in sales, Tim Elmes has developed an
                international reputation as the top luxury real estate agent in
                Fort Lauderdale. Tim’s reputation for excellence in South
                Florida’s luxury waterfront real estate market is a result of
                his unsurpassed negotiating skills, unwavering commitment to
                customer satisfaction, and personalized service. The leader in
                this market for over 30 years, Tim is renowned for his extensive
                knowledge of all aspects of this highly specialized niche. He
                has a unique ability to connect distinguished buyers with
                exceptional properties matching their criteria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
