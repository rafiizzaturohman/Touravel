import { BiWorld } from "react-icons/bi";
import { FaBed, FaCartPlus, FaGlobe, FaPeopleLine } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-4 space-y-4 md:space-y-20">
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

          <div className="flex flex-col w-1/2 md:flex-row md:h-[8vw]">
            <div className="transition delay-150 bg-[#1F4590] items-center px-16 py-4 hover:w-[85vw] hover:bg-[#FFA451] rounded-tr-lg rounded-br-none hover:rounded-r-lg md:hover:rounded-br-none md:hover:rounded-t-lg md:rounded-tl-lg md:rounded-tr-none md:hover:h-[12vw]">
              <div>
                <BiWorld size={25} color="white" />
              </div>
            </div>
            <div className="transition delay-150 bg-[#1F4590] items-center px-16 py-4 hover:w-[85vw] hover:bg-[#FFA451] hover:rounded-r-lg md:hover:rounded-br-none md:hover:rounded-t-lg md:rounded-none md:hover:h-[12vw]">
              <div>
                <FaPeopleLine size={25} color="white" />
              </div>
            </div>
            <div className="transition delay-150 bg-[#1F4590] items-center px-16 py-4 hover:w-[85vw] hover:bg-[#FFA451] hover:rounded-r-lg md:hover:rounded-br-none md:hover:rounded-t-lg md:rounded-none md:hover:h-[12vw]">
              <div>
                <FaCartPlus size={25} color="white" />
              </div>
            </div>
            <div className="transition delay-150 bg-[#1F4590] items-center px-16 py-4 hover:w-[85vw] hover:bg-[#FFA451] rounded-tr-none rounded-br-lg hover:rounded-r-lg md:hover:rounded-br-none md:hover:rounded-t-lg md:rounded-tr-lg md:rounded-r-none md:hover:h-[12vw]">
              <div>
                <FaBed size={25} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
