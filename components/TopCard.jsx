import React from "react";
import Link from "next/link";

const TopCard = ({ phone_name, slug, favorites, hits }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border px-4 py-1 rounded-xl bg-gray-50 hover:bg-gray-200 hover:scale-110 shadow-lg hover:shadow-2xl duration-500">
        <Link href={`/products/${slug}`}>
          <h2 className="text-sm font-bold capitalize cursor-pointer">
            {phone_name}
          </h2>

          {favorites !== undefined && (
            <div className="flex justify-center items-center">
              <p> &#10084; {favorites}</p>
            </div>
          )}

          {hits !== undefined && (
            <div className="flex justify-center items-center">
              <p> &#127919; {hits} Hits</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default TopCard;
