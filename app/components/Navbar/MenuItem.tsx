import Link from "next/link";
import React from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="capitalize whitespace-nowrap text-base text-[#1F4590] hover:bg-slate-200 py-2 px-3 font-semibold"
    >
      {label}
    </Link>
  );
};

export default MenuItem;
