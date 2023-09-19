import React from "react";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const Introductions: React.FC = () => {
  return (
    <div className="space-y-3 md:space-y-8">
      <h4 className="capitalize text-[#1F4590] text-2xl md:text-[55px] text-stroke font-bold tracking-wide md:leading-[50px]">
        make your trip memorable book with tour
        <span className="lowercase text-lg text-[#FFA451] md:text-[40px]">
          avel
        </span>
      </h4>

      <p className="text-sm font-normal text-[#4A4A4AB2]/70 md:w-[456px] md:text-lg">
        We have partners with several destinations that you might feel at home
        there, we will guide you with our best service.
      </p>

      <div className="flex flex-row justify-start space-x-8">
        <div className="flex flex-row justify-start space-x-0.5 items-center">
          <BiSolidCheckboxChecked size={24} color={`#1F4590`} id="plan" />
          <label
            htmlFor="plan"
            className="text-[#535353] text-base font-medium"
          >
            Plan your trip
          </label>
        </div>
        <div className="flex flex-row justify-start space-x-0.5 items-center">
          <BiSolidCheckboxChecked size={24} color={`#1F4590`} id="fly" />
          <label htmlFor="fly" className="text-[#535353] text-base font-medium">
            Fly with us
          </label>
        </div>
      </div>
    </div>
  );
};

export default Introductions;
