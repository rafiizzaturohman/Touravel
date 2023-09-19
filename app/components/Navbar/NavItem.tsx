import Link from "next/link";
import React from "react";
import DownloadButton from "./DownloadButton";

const NavItem: React.FC = () => {
  return (
    <div className="capitalize flex flex-row justify-start items-center text-xl space-x-10 whitespace-nowrap text-[#1F4590] font-semibold">
      <Link href={"#"}>home</Link>
      <Link href={"#"}>services</Link>
      <Link href={"#"}>pricing</Link>
      <Link href={"#"}>about us</Link>
      <Link href={"#"}>contact</Link>
      <DownloadButton />
    </div>
  );
};

export default NavItem;
