import Link from "next/link";
import React from "react";

const DownloadButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link
      href={"#"}
      className="capitalize whitespace-nowrap bg-[#FFA451] text-white font-bold py-1.5 px-2 sm:px-4 sm:py-2 w-3/4 text-center rounded-full hover:bg-[#d88537]"
      onClick={onClick}
    >
      member area
    </Link>
  );
};

export default DownloadButton;
