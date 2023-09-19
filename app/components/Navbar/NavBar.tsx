"use client";

import React from "react";
import NavItem from "./NavItem";
import Menu from "./Menu";

const NavBar: React.FC = () => {
  return (
    <nav id="NavBar">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex flex-row justify-between items-center p-8 md:p-10 box-border">
            <div className="w-1/3 md:w-full flex flex-row justify-start items-center">
              <img
                src="/icons/Touravel.svg"
                alt="Touravel"
                className="w-auto"
              />
            </div>

            <div className="w-1/2 md:w-3/4 flex flex-row justify-end items-center">
              <div className="hidden md:flex md:flex-row md:justify-between w-full">
                <NavItem />
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
