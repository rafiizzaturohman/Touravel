"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import DestinationCard from "./Card/DestinationCard";

const destinationsList = [
  {
    image: "kuta",
    name: "kuta",
    location: "indonesia",
    rating: "4.8",
    type: "beach",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam integer eget ut lorem.",
  },
  {
    image: "bangkok",
    name: "bangkok",
    location: "thailand",
    rating: "4.8",
    type: "beach",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam integer eget ut lorem.",
  },
  {
    image: "yogya",
    name: "yogyakarta",
    location: "indonesia",
    rating: "4.8",
    type: "beach",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam integer eget ut lorem.",
  },
  {
    image: "zermatt",
    name: "zermatt",
    location: "swiss",
    rating: "4.8",
    type: "beach",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam integer eget ut lorem.",
  },
  {
    image: "zermatt",
    name: "zermatt",
    location: "swiss",
    rating: "4.8",
    type: "beach",
    cost: 300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam integer eget ut lorem.",
  },
];

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
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section id="destinations">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 my-20">
          <div className="">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="uppercase text-[10px] md:text-xl text-[#F0B666] font-bold">
                  top destination
                </p>
                <h4 className="capitalize text-sm md:text-4xl tracking-wide font-bold">
                  explore top destination
                </h4>
              </div>

              <div className="flex flex-row gap-1">
                <SlickPrev />

                <SlickNext />
              </div>
            </div>

            <div>
              <Slider ref={sliderRef} {...settings}>
                {destinationsList.map((item, index) => (
                  <div key={index}>
                    <DestinationCard {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
