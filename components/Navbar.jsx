"use client";
import { useState } from "react";
import { menuItemList } from "@/public/constants";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center my-4 py-4 bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg px-6 relative">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="drop-shadow-md"
          />
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#541872] to-[#c62aac] bg-clip-text text-transparent">
            Mobile Insight
          </h1>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-[#541872]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
      >
        {menuItemList.map((item, index) => (
          <Link
            key={index}
            href={item.itemURL}
            className="bg-white/70 rounded-full px-6 py-2.5 hover:bg-[#c62aac] hover:text-white text-[#541872] font-medium shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            {item.itemName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
