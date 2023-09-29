"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { BiRightArrowAlt, BiWorld } from "react-icons/bi";
import { FaBed, FaCartPlus, FaPeopleLine } from "react-icons/fa6";

interface ServiceCardProps {
  title: string;
  descriptions: string;
  no: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  descriptions,
  no,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex flex-col w-2/3 md:flex-row md:h-[4vw] md:w-full">
      {isOpen == false ? (
        <div
          className={
            no == 0
              ? "bg-[#1F4590] items-center py-3 text-white rounded-tr-lg md:rounded-r-none md:rounded-tl-lg"
              : no == 3
              ? "bg-[#1F4590] items-center py-3 text-white rounded-br-lg md:rounded-br-none md:rounded-tr-lg"
              : "bg-[#1F4590] items-center py-3 text-white rounded-none"
          }
          onClick={toggleOpen}
        >
          <div className="flex flex-row md:flex-col justify-start items-center px-2 py-1 space-x-3">
            {no == 0 ? (
              <BiWorld className="text-xl md:text-4xl" color="white" />
            ) : no == 1 ? (
              <FaPeopleLine className="text-xl md:text-4xl" color="white" />
            ) : no == 2 ? (
              <FaCartPlus className="text-xl md:text-4xl" color="white" />
            ) : (
              <FaBed className="text-xl md:text-4xl" color="white" />
            )}

            <h4 className="font-bold text-xs">{title}</h4>
          </div>
        </div>
      ) : (
        <div
          className="bg-[#FFA451] w-[90vw] md:w-full md:h-[8vw] flex flex-col md:flex-row  md:justify-center text-white rounded-r-lg md:rounded-br-none md:rounded-t-lg py-2"
          onClick={toggleOpen}
        >
          <div className="flex flex-row md:flex-col justify-evenly items-center md:w-1/2">
            <div className="flex flex-col justify-center w-full space-y-2 text-center">
              <div className="flex flex-auto justify-center">
                {no == 0 ? (
                  <BiWorld className="text-2xl md:text-4xl" color="white" />
                ) : no == 1 ? (
                  <FaPeopleLine
                    className="text-2xl md:text-4xl"
                    color="white"
                  />
                ) : no == 2 ? (
                  <FaCartPlus className="text-2xl md:text-4xl" color="white" />
                ) : (
                  <FaBed className="text-2xl md:text-4xl" color="white" />
                )}
              </div>

              <h4 className="font-bold text-sm">{title}</h4>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium">{descriptions}</p>

              <Link
                href={"#"}
                className="text-[#1B1C1E] text-xs font-semibold hover:underline hover:underline-offset-4 flex items-center"
              >
                <p>Learn more</p>
                <BiRightArrowAlt className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
