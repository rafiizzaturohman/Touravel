import React, { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DownloadButton from "./DownloadButton";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative md:hidden">
      <div>
        <div
          onClick={toggleOpen}
          className="p-2 md:py-1 md:px-2 border-0 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:neon-teal transition"
        >
          <BiMenu size={25} color="black" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 right-0 bg-white rounded-lg shadow-md overflow-hidden mt-2 w-[40vw] xs:w-[30vw]">
          <div className="flex flex-col text-left cursor-pointer">
            <MenuItem label="home" href="#" onClick={toggleOpen} />
            <MenuItem label="services" href="#services" onClick={toggleOpen} />
            <MenuItem label="pricing" href="#pricing" onClick={toggleOpen} />
            <MenuItem label="about us" href="#about" onClick={toggleOpen} />
            <MenuItem label="contact" href="#contact" onClick={toggleOpen} />
            <div className="my-3 mx-1.5">
              <DownloadButton onClick={toggleOpen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
