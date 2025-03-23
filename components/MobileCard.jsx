import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileCard = ({ phone_name, slug, image }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center group">
      <Link href={`/products/${slug}`} className="space-y-4">
        <div className="relative overflow-hidden rounded-xl bg-white/50 p-4 group-hover:bg-white/80 transition-colors duration-300">
          <Image
            src={image}
            alt={slug}
            width={150}
            height={300}
            className="object-contain transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-base font-semibold text-[#541872] group-hover:text-[#c62aac] text-center capitalize transition-colors duration-300">
          {phone_name}
        </h2>
      </Link>
    </div>
  );
};

export default MobileCard;
