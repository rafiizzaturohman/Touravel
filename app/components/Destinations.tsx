"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";

const Destinations = () => {
  const sliderRef = useRef<Slider>(null);

  const SlickNext = () => {
    return (
      <div
        className="p-1 md:p-2 border-2 border-[#1F4590] hover:bg-[#1F4590] rounded-full text-[#1F4590] hover:text-white cursor-pointer"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <FaChevronRight size={12} />
      </div>
    );
  };
  const SlickPrev = () => {
    return (
      <div
        className="p-1 md:p-2 border-2 border-[#1F4590] hover:bg-[#1F4590] rounded-full text-[#1F4590] hover:text-white cursor-pointer"
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <FaChevronLeft size={12} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section id="destinations">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4">
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="uppercase text-[10px] md:text-xl text-[#F0B666] font-bold">
                top destination
              </p>
              <h4 className="capitalize text-sm md:text-4xl tracking-wide font-bold">
                explore top destination
              </h4>
            </div>

            <div className="flex flex-row space-x-1">
              <SlickPrev />

              <SlickNext />
            </div>
          </div>

          <div className="my-4">
            <Slider ref={sliderRef} {...settings}>
              <div className="relative">
                <div className="w-28 md:w-full">
                  <img src="/images/destinationImg/bangkok.png" alt="Bangkok" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
