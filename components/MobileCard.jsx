import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileCard = ({ phone_name, slug, image }) => {
  return (
    <div className="border px-4 py-1 rounded-xl bg-gray-50 hover:bg-gray-200 hover:scale-110 shadow-lg hover:shadow-2xl duration-500 flex flex-col justify-center items-center">
      <Link href={`/${slug}`}>
        <Image
          src={image}
          alt={slug}
          width={150}
          height={300}
          className=" object-cover my-1"
        />
        <h2 className="text-sm font-bold capitalize cursor-pointer">
          {phone_name}
        </h2>
      </Link>
    </div>
  );
};

export default MobileCard;
