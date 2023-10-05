"use client";

import React from "react";
import Slider from "react-slick";

const CommentData = [
  {
    image: "1",
    username: "tinyleopard720",
    comment:
      "I am very helpful with this trouravel, because we can easily get it all without having to prepare it from afar, and also the price is affordable, highly recommended.",
    userInfo: "Traveller",
  },
  {
    image: "1",
    username: "aicekerime28",
    comment:
      "I am very helpful with this trouravel, because we can easily get it all without having to prepare it from afar, and also the price is affordable, highly recommended.",
    userInfo: "Traveller",
  },
  {
    image: "1",
    username: "littleboar20",
    comment:
      "I am very helpful with this trouravel, because we can easily get it all without having to prepare it from afar, and also the price is affordable, highly recommended.",
    userInfo: "Traveller",
  },
];

const Comment: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="Comment">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 md:mx-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-evenly">
            <div className="space-y-3 text-[#4A4A4A]">
              <h4 className="uppercase text-xs text-[#FFA451] font-bold">
                what they said ?
              </h4>

              <h2 className="text-base font-semibold">
                What customers say about they experience with us
              </h2>

              <p className="text-[10px]">
                They say what they feel, most of them say they are very
                satisfied, especially satisfied because they are always guided
                and directed to between destinations so that they are not
                confused, and also the provision of comfortable lodging does not
                have to pay a lot to get it all
              </p>
            </div>

            <div>
              <Slider {...settings}>
                {CommentData.map((item, index) => (
                  <div className="flex flex-col justify-center items-center bg-white shadow-lg text-center px-6 py-3 rounded-lg">
                    <div className="w-[18%] flex justify-center">
                      <img
                        src={`/Customer/${item.image}.png`}
                        alt="Customer Image"
                      />
                    </div>

                    <div className="text-xs">
                      <p>{item.comment}</p>

                      <p>by {item.username}</p>

                      <p>{item.userInfo}</p>
                    </div>
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

export default Comment;
