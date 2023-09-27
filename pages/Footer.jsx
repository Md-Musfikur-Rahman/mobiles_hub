import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/logo.png";
import { FooterLinks } from "@/public/constants";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto my-6 flex justify-between items-center">
      <div>
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <h1 className="text-4xl font-bold text-[#541872]">Mobile Insight</h1>
        </Link>
      </div>

      <div>All right reserved</div>

      <div className="flex gap-2 items-center">
        {FooterLinks.map((link) => (
          <Link key={link.name} href={link.linkURL}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
