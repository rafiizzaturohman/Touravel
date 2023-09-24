"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { BiWorld } from "react-icons/bi";

const serviceList = {
  title: "Lot of Choises",
  descriptions:
    "Total of more than 450 destinations in various countries in the world become partners with us",
};

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 mb-20 space-y-4 md:space-y-20">
          <div className="text-center text-[#4A4A4A]">
            <h4 className="uppercase text-[#F0B666] text-xs md:text-xl font-bold tracking-wide">
              what we deserve
            </h4>
            <h2 className="capitalize text-lg md:text-4xl font-bold tracking-wide">
              top values for you
            </h2>
            <p className="text-xs md:text-lg font-normal">
              The best service that will be with you every time
            </p>
          </div>

          <div className="flex flex-auto md:justify-center">
            <div className="flex flex-col w-1/2 md:flex-row md:h-[8vw]">
              {isOpen == true ? (
                <div
                  className="bg-[#1F4590] items-center px-2 py-4 text-white rounded-tr-lg"
                  onClick={toggleOpen}
                >
                  <div className="flex flex-row md:flex-col justify-evenly">
                    <BiWorld size={25} color="white" />

                    <h4 className="font-bold">Lot of Choises</h4>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-[#FFA451] w-[90vw] text-white rounded-r-lg p-2"
                  onClick={toggleOpen}
                >
                  <div className="flex flex-row md:flex-col items-center space-x-12">
                    <div className="flex flex-col justify-center">
                      <BiWorld className="text-4xl" />

                      <h4 className="font-bold text-sm">Lot of Choises</h4>
                    </div>

                    <div>
                      <p className="text-xs font-medium">
                        Total of more than 450 destinations in various countries
                        in the world become partners with us
                      </p>

                      <Link
                        href={"#"}
                        className="text-black text-xs font-semibold hover:underline hover:underline-offset-4"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
