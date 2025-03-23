import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo.png";
import { FooterLinks } from "@/public/constants";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto my-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-purple-200">
      <div className="flex-shrink-0">
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#541872] to-[#c62aac] bg-clip-text text-transparent">
            Mobile Insight
          </h1>
        </Link>
      </div>

      <div className="text-[#541872] font-medium">
        © 2024 Mobile Insight. All rights reserved.
      </div>

      <div className="flex gap-4 items-center">
        {FooterLinks.map((link) => (
          <Link
            key={link.name}
            href={link.linkURL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            title={link.name}
          >
            <span
              className="text-[#541872] group-hover:text-[#c62aac] transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: link.logo }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
