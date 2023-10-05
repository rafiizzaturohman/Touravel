import React from "react";
import Introductions from "./Hero/Introduction";
import GetSchedule from "./Hero/GetSchedule";

const Hero: React.FC = () => {
  return (
    <section id="Hero">
      <div className="container max-w-7xl mx-auto">
        <div className="relative items-center">
          <div className="absolute -z-10 -top-6 md:-top-14 right-0 md:-right-24 flex flex-col items-end">
            <img
              src="/images/world-map.png"
              alt="World Map"
              className="w-1/2 md:w-3/4"
            />
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse md:justify-between items-center">
            <div className="w-3/4 md:w-[847px] md:h-auto">
              <img src="/images/hero.png" alt="Hero" />
            </div>

            <div className="mx-4">
              <div className="space-y-14">
                <Introductions />

                {/* <GetSchedule /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
