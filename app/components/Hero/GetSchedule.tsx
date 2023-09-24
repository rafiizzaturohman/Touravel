import React from "react";
import {
  BiChevronDown,
  BiSearch,
  BiSolidCalendarAlt,
  BiSolidMap,
} from "react-icons/bi";
import { FaCalendar, FaChevronDown, FaMagnifyingGlass } from "react-icons/fa6";

const GetSchedule: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 -top-2 left-1/4 right-1/4 md:left-1/3 md:right-1/3">
        <div className="flex flex-col justify-center bg-[#1F4590] text-sm md:text-base px-3 py-1.5 md:p-0 md:w-[205px] md:h-[45px] text-center rounded-full">
          <h6 className="text-white font-semibold tracking-wide">
            Get the schedule
          </h6>
        </div>
      </div>

      <div>
        <img
          src="/images/mask-group.png"
          alt="mask-group"
          className="h-32 md:h-auto"
        />
      </div>

      <div className="absolute top-9 md:top-1/3 md:left-20">
        <div className="flex flex-row space-x-12 md:space-x-24 items-center w-full">
          <div className="flex flex-row space-x-8 items-center">
            <div className="mx-auto w-3/5 md:w-1/2">
              <div className="flex flex-row items-center space-x-1">
                <BiSolidMap size={20} color={"#1F4590"} />
                <div>
                  <p className="flex flex-row items-center text-xs md:text-base">
                    Location
                    <span>
                      <BiChevronDown size={20} />
                    </span>
                  </p>
                  <input
                    type="text"
                    className="rounded-lg px-1 py-0.5 w-24 md:px-2 md:py-1 md:w-40"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto w-3/5 md:w-1/2">
              <div className="flex flex-row items-center space-x-1">
                <FaCalendar size={20} color={"#1F4590"} />
                <div>
                  <p className="flex flex-row items-center text-xs md:text-base">
                    Date
                    <span>
                      <BiChevronDown size={20} />
                    </span>
                  </p>
                  <input
                    type="date"
                    className="rounded-lg px-1 py-0.5 w-24 md:px-2 md:py-1 md:w-40"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="bg-[#FFA451] mx-auto p-1.5 md:p-3 rounded-full">
            <FaMagnifyingGlass size={20} color={"white"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetSchedule;
